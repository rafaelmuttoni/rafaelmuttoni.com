import { Box, Heading } from '@chakra-ui/react'
import Menu from './Menu'
import SingleProject from './SingleProject'
import projects from './data'

export default function Greetings() {
  return (
    <Box my={20}>
      <Box d="flex" justifyContent="flex-start" alignItems="center" mb={6}>
        <Heading as="h2" size="xl">
          Projects
        </Heading>
        <Menu ml="auto" />
      </Box>
      {projects.map((project, projectIndex) => (
        <SingleProject key={projectIndex} project={project} />
      ))}
    </Box>
  )
}
