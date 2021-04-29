import { Box, Divider, Link, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box mt="100px" mb={4} textAlign="center">
      <Divider m="0 auto" w="75%" mb={8} />
      <Box mb={6}>
        <Text fontSize="xs" as="i">
          This website is{' '}
          <Link
            href="https://github.com/rafaelmuttoni/rafaelmuttoni.com"
            target="_blank"
            fontWeight="bold"
            color="blue.500"
          >
            open source
          </Link>
          , and was built with{' '}
          <Link
            href="https://chakra-ui.com/"
            target="_blank"
            fontWeight="bold"
            color="blue.500"
          >
            Chakra UI
          </Link>{' '}
          and{' '}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            fontWeight="bold"
            color="blue.500"
          >
            Next.js
          </Link>
          .
        </Text>
      </Box>
      <Box>
        <Text fontSize="x-small" color="gray.400">
          © 2021 • Rafael Muttoni
        </Text>
      </Box>
    </Box>
  )
}
