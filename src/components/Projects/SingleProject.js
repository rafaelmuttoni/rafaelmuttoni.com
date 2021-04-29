import { useState } from 'react'
import {
  chakra,
  Badge,
  Box,
  Button,
  Heading,
  Icon,
  LinkBox,
  LinkOverlay,
  Text,
} from '@chakra-ui/react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import Image from 'next/image'

const ImageFromChakraFactory = chakra(Image, {
  shouldForwardProp: (prop) => !['sample'].includes(prop),
})

function ChakraImage({ ...rest }) {
  return <ImageFromChakraFactory {...rest} />
}

export default function SingleProject({ project }) {
  const { name, image, url, description, smallDescription, tags } = project

  const [isTextVisible, setIsTextVisible] = useState(false)

  return (
    <LinkBox
      w="100%"
      p={6}
      mb={6}
      borderRadius="md"
      border="1px"
      borderColor="gray.200"
      transition="ease-in 200ms"
      _hover={{ boxShadow: 'md' }}
    >
      <Box mb={2}>
        <ChakraImage src={image} width={1920} height={936} borderRadius="sm" />
      </Box>
      <Heading mb={2}>
        <LinkOverlay href={url} target="_blank">
          {name}
        </LinkOverlay>
      </Heading>
      <Box maxW="100%" mb={2}>
        {tags.map((tag, tagIndex) => (
          <Badge key={tagIndex} mr={1}>
            {tag}
          </Badge>
        ))}
      </Box>

      {!smallDescription && <Text>{description}</Text>}

      {smallDescription && isTextVisible ? (
        <Text>{description}</Text>
      ) : (
        <Text>{smallDescription}</Text>
      )}

      {smallDescription && (
        <Button
          size="sm"
          rightIcon={<Icon as={isTextVisible ? FaChevronUp : FaChevronDown} />}
          mt={2}
          onClick={() => setIsTextVisible(!isTextVisible)}
        >
          Show {isTextVisible ? 'less' : 'more'}
        </Button>
      )}
    </LinkBox>
  )
}
