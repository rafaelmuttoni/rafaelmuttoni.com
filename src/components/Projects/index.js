import { useState } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Menu from './Menu'
import SingleProject from './SingleProject'
import projects from './data'

export default function Greetings() {
  const [filter, setFilter] = useState('all')

  return (
    <Box my={20}>
      <Box d="flex" justifyContent="flex-start" alignItems="center" mb={6}>
        <Heading as="h2" size="xl">
          Projects
        </Heading>
        <Menu filter={filter} setFilter={setFilter} ml="auto" />
      </Box>
      {projects
        .filter((p) => {
          if (filter === 'all') {
            return p
          }
          return p.type === filter
        })
        .map((project, projectIndex) => (
          <SingleProject key={projectIndex} project={project} />
        ))}
    </Box>
  )
}
