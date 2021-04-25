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

import Menu from './Menu'

export default function Greetings() {
  return (
    <Box mt={20}>
      <Box d="flex" justifyContent="flex-start" alignItems="center" mb={4}>
        <Heading as="h2" size="xl">
          Projects
        </Heading>
        <Menu ml="auto" />
      </Box>
    </Box>
  )
}
