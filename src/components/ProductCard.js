import Image from "next/image";
import { AspectRatio, Box, ButtonGroup, Container, Flex, IconButton, Text } from "@chakra-ui/react";
import { AddIcon, MinusIcon, } from '@chakra-ui/icons'

export function ProductCard({image, title, price, rating}) {
    return (
        <Box width='12rem' height='16rem'>
            <Flex display="flex" alignItems="center" justifyContent="center" height="12rem" boxShadow='0px 10px 10px -6px black' width="12rem" flexDirection='column'>
                <Box bgColor="white" padding="1rem 1.5rem" textTransform="uppercase" fontWeight="bold" borderRadius="0.25rem">
                    <Image src='/icon-bed.svg' alt='' width='40' height='40'/>   
                </Box>    
            </Flex>

            <Box width='12rem' height='4rem'>
                <Flex display="flex" alignItems="center" justifyContent="center" height="4rem" width="12rem">
                    <ButtonGroup size='sm' isAttached variant='outline'>
                            <IconButton aria-label='Substract' icon={<MinusIcon />} colorScheme='gray' variant='outline'/>
                                <Box width='4rem' align='center' border='1px solid gray' marginLeft='1px'>
                                    <Text>3</Text>
                                </Box>
                            <IconButton aria-label='Add' icon={<AddIcon />} colorScheme='gray' variant='outline'/>
                    </ButtonGroup>
                </Flex>
            </Box>
        </Box>
    );
}