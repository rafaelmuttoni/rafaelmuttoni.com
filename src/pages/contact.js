import { Box, Button, Heading, Link } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Contact() {
  return (
    <Box mt={20} w="100vh">
      <Heading as="h1" size="xl" mb={4}>
        Get in touch
      </Heading>
      <Box mb={4}>
        If you wanna talk to me about a project, maybe working together or just
        say hi you can either send an e-mail to{' '}
        <Link
          href="mailto:hi@rafaelmuttoni.com"
          color="blue.500"
          fontWeight="bold"
        >
          hi@rafaelmuttoni.com
        </Link>{' '}
        or hit me up at my social medias.
      </Box>
      <Box>
        <Button
          as="a"
          href="https://www.linkedin.com/in/rafaelmuttoni/"
          target="_blank"
          size="sm"
          bg="blue.500"
          color="white"
          _hover={{
            bg: 'blue.600',
          }}
          _active={{
            bg: 'blue.600',
          }}
          leftIcon={<FaLinkedin />}
          mr={2}
        >
          Linkedin
        </Button>

        <Button
          as="a"
          href="https://www.twitter.com/rafael_muttoni/"
          target="_blank"
          size="sm"
          bg="blue.500"
          color="white"
          _hover={{
            bg: 'blue.600',
          }}
          _active={{
            bg: 'blue.600',
          }}
          leftIcon={<FaTwitter />}
        >
          Twitter
        </Button>
      </Box>
    </Box>
  )
}
