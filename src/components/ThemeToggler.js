import { IconButton, Icon, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeToggler({ ...rest }) {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      onClick={toggleColorMode}
      icon={<Icon as={colorMode === 'light' ? FaMoon : FaSun} />}
      {...rest}
    />
  )
}
