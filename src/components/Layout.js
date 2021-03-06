import { Box, Container, Link, Text } from '@chakra-ui/react'

import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

export default function Layout({ children }) {
  return (
    <Box minW="100vw" maxW="100%" minH="100vh">
      <Navbar />
      <Container maxW="container.md">{children}</Container>
      <Footer />
    </Box>
  )
}
