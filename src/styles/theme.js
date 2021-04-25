// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react'
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      main: '#bd93f9',
      // ...
      secondary: '#6272a4',
    },
  },
})

export default theme
