import {
  Icon,
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  useToast,
} from '@chakra-ui/react'
import { FaFilter } from 'react-icons/fa'

export default function ProjectsMenu({ filter, setFilter, ...rest }) {
  const toast = useToast()

  const parseFilter = (name) => {
    if (name === 'all') return `all`
    if (name === 'frontend') return `Web Design`
    if (name === 'fullstack') return `Full Stack`
  }

  const handleSetFilter = (name) => {
    setFilter(name)
    toast({
      title: `Showing ${parseFilter(name)} projects.`,
    })
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        aria-label="Options"
        leftIcon={<Icon as={FaFilter} />}
        variant="outline"
        bg="blue.500"
        color="white"
        _hover={{
          bg: 'blue.600',
        }}
        _active={{
          bg: 'blue.600',
        }}
        {...rest}
      >
        Filters
      </MenuButton>
      <MenuList>
        <MenuOptionGroup value={filter} title="Filters" type="radio">
          <MenuItemOption
            value="all"
            minH="48px"
            onClick={() => handleSetFilter('all')}
          >
            All
          </MenuItemOption>
          <MenuItemOption
            value="frontend"
            onClick={() => handleSetFilter('frontend')}
            minH="48px"
          >
            Web Design
          </MenuItemOption>

          <MenuItemOption
            value="fullstack"
            onClick={() => handleSetFilter('fullstack')}
            minH="48px"
          >
            Web Apps
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}
