import { Box, ChakraProvider, Container, Flex, Text, Link, useColorModeValue } from '@chakra-ui/react'

function HeaderLink({href, children}) {
    const linkColor = useColorModeValue('', 'whiteAlpha.900');
    const linkHoverColor = useColorModeValue('gray.600', 'gray.300');
    return (
        <Link 
            href={href} 
            color={'rgb(17, 17, 17)'} 
            fontFamily={"'Inter', Arial, sans-serif"} 
            fontWeight={400}
            _hover={{ color: linkHoverColor, textDecoration: 'none' }} 
            fontSize={'20px'}>{children}</Link>
    );
}

export default HeaderLink