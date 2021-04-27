// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react'
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    theme: {
      main: '#0D80BF',
      secondary: '#0c70a6',
    },
  },
})

export default theme
