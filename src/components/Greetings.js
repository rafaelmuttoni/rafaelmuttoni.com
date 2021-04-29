import { Box, Heading, Link as ChakraLink, Text } from '@chakra-ui/react'

export default function Greetings() {
  return (
    <Box mt={{ base: 10, md: 15, lg: 20 }} w="100%">
      <Heading as="h1" size="xl" mb={4}>
        Hey, I'm Rafael Muttoni 👋
      </Heading>
      <Text fontSize="xl" mb={2}>
        I'm a Developer currently working on bootstrapped projects such as{' '}
        <ChakraLink
          color="blue.500"
          href="https://terapeutapro.com.br"
          target="_blank"
        >
          Terapeuta Pro.
        </ChakraLink>
      </Text>
      <Box d="flex" justifyContent="flex-start" alignItems="center">
        <Text fontSize="xl">Check out some of my previous work below. </Text>
      </Box>
    </Box>
  )
}
