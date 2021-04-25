import {
  Icon,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { FaFilter } from 'react-icons/fa'

export default function ProjectsMenu({ ...rest }) {
  return (
    <Menu>
      <MenuButton
        as={Button}
        aria-label="Options"
        leftIcon={<Icon as={FaFilter} />}
        variant="outline"
        bgGradient="linear(to-r, brand.main, brand.secondary)"
        {...rest}
      >
        Filters
      </MenuButton>
      <MenuList>
        <MenuItem minH="48px" fontWeight="bold">
          Filtros
        </MenuItem>

        <MenuItem minH="48px" fontWeight="bold">
          Fronend
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
