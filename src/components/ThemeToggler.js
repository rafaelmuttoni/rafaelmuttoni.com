import { IconButton, useColorMode } from '@chakra-ui/react'

function Icon({ mode }) {
  return <span>{mode === 'light' ? '🌙' : '☀️'}</span>
}

export default function ThemeToggler({ ...rest }) {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      onClick={toggleColorMode}
      {...rest}
      icon={<Icon mode={colorMode} />}
    ></IconButton>
  )
}
