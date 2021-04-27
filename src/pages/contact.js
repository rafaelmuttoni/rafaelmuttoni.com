import { Box, Button, Heading, Icon } from '@chakra-ui/react'
import { FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <Box mt={20} w="100vh">
      <Heading as="h1" size="xl" mb={4}>
        Contact
      </Heading>
      <Box>
        If you want to hit me up quickly about a business matter:{' '}
        <Button
          as="a"
          href="mailto:hi@rafaelmuttoni.com"
          leftIcon={<Icon as={FaEnvelope} />}
          bg="theme.main"
          color="white"
          _hover={{
            bg: 'theme.secondary',
          }}
          _active={{
            bg: 'theme.secondary',
          }}
          variant="solid"
          size="sm"
        >
          Email
        </Button>
      </Box>
      <Box>Talk abo</Box>
    </Box>
  )
}
