import Link from 'next/link'
import Image from 'next/image'

import { Box, Flex, Container, Text } from '@chakra-ui/react'

export function TopBar() {
  return (
    <Box bg='#FD9255' w='100%' p={2}>
      <Container as={Flex} color='white' maxWidth='60rem' justifyContent='space-between' fontSize="md" alignItems='center' size={{
        lg:'lg',
      }}>
          <Flex gap="1.5rem">
              <Flex as={Link} href='#' alignItems="center" gap="0.5rem">
                <Image src="/icon-house.svg" alt="" width="50" height="50"/>
              </Flex>
          </Flex>
              

          <Flex gap="1.5rem">
              <Link href="#">
                <Text>How we work</Text>
              </Link>
              
              <Link href="#">
                <Text>Services</Text>
              </Link>
              
              <Link href="#">
                <Text>Free quote</Text>
              </Link>
              
              <Link href="#">
                <Text>Contact</Text>
              </Link>
          </Flex>  
        </Container>          
    </Box>
  )
}
