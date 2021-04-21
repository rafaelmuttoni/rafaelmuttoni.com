import Link from 'next/link'
import {
  chakra,
  Avatar,
  AvatarBadge,
  Box,
  Container,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import { FaUser, FaLaptop, FaPhone, FaBars } from 'react-icons/fa'
import ThemeToggler from 'components/ThemeToggler'

function Emoji({ emoji }) {
  return (
    <chakra.span mr={2} rounded="md">
      {emoji}
    </chakra.span>
  )
}

export default function Navbar() {
  return (
    <Box boxShadow="base">
      <Container
        maxW="container.md"
        minH="75px"
        d="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box d="flex" justifyContent="center" alignItems="center">
          <Link href="/contact">
            <a>
              <Tooltip
                label="Want to talk about a project? Hit me up!"
                fontSize="md"
              >
                <Avatar
                  name="Rafael Muttoni"
                  src="/profile.jpeg"
                  mr={3}
                  transition="ease-in 200ms"
                  _hover={{
                    transform: 'scale(1.1)',
                  }}
                >
                  <AvatarBadge boxSize="1em" bg="green.500" />
                </Avatar>
              </Tooltip>
            </a>
          </Link>
        </Box>
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<Icon as={FaBars} />}
              variant="outline"
            />
            <MenuList>
              <MenuItem minH="48px" fontWeight="bold">
                <Emoji emoji="👨🏻‍💻" /> about me
              </MenuItem>
              {/* <MenuItem minH="48px" fontWeight="bold">
                <Emoji emoji="🚀" /> projects
              </MenuItem> */}
              <MenuItem minH="48px" fontWeight="bold">
                <Emoji emoji="📱" /> get in touch
              </MenuItem>
            </MenuList>
          </Menu>
          <ThemeToggler ml={2} />
        </Box>
      </Container>
    </Box>
  )
}