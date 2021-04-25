import Link from 'next/link'
import {
  Box,
  Heading,
  Icon,
  IconButton,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'

export default function Greetings() {
  return (
    <Box mt={20} w="100vh">
      <Heading as="h1" size="xl" mb={4}>
        Hey, I'm Rafael Muttoni 👋
      </Heading>
      <Text fontSize="xl" mb={2}>
        I'm a Developer currently working on bootstrapped projects such as{' '}
        <Link href="/contact">
          <ChakraLink color="brand.main">Terapeuta Pro.</ChakraLink>
        </Link>
      </Text>
      <Box d="flex" justifyContent="flex-start" alignItems="center">
        <Text fontSize="xl">Check out some of my previous work below. </Text>
        <IconButton ml={2} size="xs" icon={<Icon as={FaChevronDown} />} />
      </Box>
    </Box>
  )
}
