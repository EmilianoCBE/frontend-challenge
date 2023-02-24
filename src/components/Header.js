import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react"

export function Header() {
  return (
    <Box> 
      <Container as='Flex'size={{lg: 'lg'}} alignItems='center'>
        <Heading align='center' as='h1' size='2xl' noOfLines={1} marginBottom='1.5rem'>
          What items to store?
        </Heading>
        <Text align='center'>
            Select which items you wish to store before moving to your new home. We’ll keep ’em safe!
        </Text>
      </Container>
    </Box>
  )
}
