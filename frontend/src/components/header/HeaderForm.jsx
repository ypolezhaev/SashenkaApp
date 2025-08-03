import { Box, ChakraProvider, Container, Flex, Text, Link, useColorModeValue } from '@chakra-ui/react'
import HeaderLink from './HeaderLink';
import './Header.css';

function HeaderForm() {
    return (
        <Box as="header" width={'100%'}>
            <Container className='NavContainer'>
                <Flex  justifyContent={'space-between'} as={'nav'} gap={'7'} >
                    <HeaderLink href={'#portfolio'}>портфолио</HeaderLink>
                    <HeaderLink href={'#contacts'}>контакты</HeaderLink>
                </Flex>
            </Container>
        </Box>
        
    );
}

export default HeaderForm