import {
  chakra,
  Box,
  Container,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
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
        maxW="container.lg"
        minH="60px"
        d="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>Rafael Muttoni</Box>
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
              <MenuItem minH="48px">
                <Emoji emoji="👨🏻‍💻" /> about
              </MenuItem>
              <MenuItem minH="48px">
                <Emoji emoji="🚀" /> projects
              </MenuItem>
              <MenuItem minH="48px">
                <Emoji emoji="📱" /> contact
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </Box>
  )
}
