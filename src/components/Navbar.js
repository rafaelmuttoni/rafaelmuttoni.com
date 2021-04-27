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
  Tooltip,
} from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'
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
    <Box>
      <Box w="100%" h="15px" bg="theme.main" />
      <Container
        maxW="container.md"
        minH="125px"
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
          <ThemeToggler mr={2} />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<Icon as={FaBars} />}
              variant="outline"
            />
            <MenuList>
              <Link href="/">
                <MenuItem minH="48px" fontWeight="bold">
                  <Emoji emoji="🏠" /> home
                </MenuItem>
              </Link>
              <Link href="/about">
                <MenuItem minH="48px" fontWeight="bold">
                  <Emoji emoji="👨🏻‍💻" /> about me
                </MenuItem>
              </Link>
              <Link href="/contact">
                <MenuItem minH="48px" fontWeight="bold">
                  <Emoji emoji="📱" /> get in touch
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </Box>
  )
}
