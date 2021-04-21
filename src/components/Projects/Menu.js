import {
  Icon,
  IconButton,
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
        as={IconButton}
        aria-label="Options"
        icon={<Icon as={FaFilter} />}
        variant="outline"
        {...rest}
      />
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
