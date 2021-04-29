import { Badge, Box, Heading, Link as ChakraLink, Text } from '@chakra-ui/react'
import { Link } from 'next/link'

export default function About() {
  return (
    <Box mt={20} w="100%">
      <Heading as="h1" size="xl" mb={4}>
        About me 👨🏻‍💻
      </Heading>
      <Box mb={5} borderBottom="1px" borderColor="gray.200" pb={3}>
        <Text fontSize="lg" mb={1}>
          Since I was a kid I've always been very passionate about creating.
          Combining that passion with my interest in technology led me to become
          a software developer.
        </Text>
        <Text fontSize="lg" mb={1}>
          I love coding and all the process that involves creating software. I'm
          very focused and dedicated to get that awesome final result I know
          it's achievable.
        </Text>
        <Text fontSize="lg" mb={1}>
          I'm also very passioante about helping people get into coding, I
          believe it's a life-changing decision. By the way, if you want to get
          into coding or is struggling to learn feel free to{' '}
          <ChakraLink to="/contact" as={Link} color="blue.500">
            get in touch with me
          </ChakraLink>
          , it will be my pleasure to help you.
        </Text>
      </Box>

      <Heading as="h2" size="md" mb={2}>
        Technologies I've experience with
      </Heading>
      {[
        'Javascript',
        'Python',
        'HTML5',
        'CSS',
        'React',
        'Next',
        'Gatsby',
        'Material UI',
        'Bootstrap',
        'styled-components',
        'Tailwindcss',
        'GraphQL',
        'Node.js',
        'Adonis',
        'Express',
        'MySQL',
        'PostgreSQL',
        'AWS',
        'Git',
        'UNIX',
      ].map((tag, tagIndex) => (
        <Badge key={tagIndex} mr={1} bg="blue.500" variant="solid">
          {tag}
        </Badge>
      ))}
      <Text mt={2}>
        It's always a matter of finding the right tool for the job 🛠️
      </Text>
    </Box>
  )
}
