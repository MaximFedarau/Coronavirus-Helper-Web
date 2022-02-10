import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Center
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Center height="50rem">
      <Container>
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider  />
      <br/>
      <Box align="center">
        <NextLink href="/">
          <Button colorScheme="teal">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
    </Center>
  )
}

export default NotFound