import { Box, ChakraProvider, Container, Flex, Text, Link, useColorModeValue } from '@chakra-ui/react'

function PerfomanceText({color, children}) {
    const headingColor = useColorModeValue('gray.800', 'whiteAlpha.900');
    const subTextColor = useColorModeValue('gray.600', 'gray.300');
    const buttonBg = useColorModeValue('gray.800', 'whiteAlpha.900');
    const buttonColor = useColorModeValue('white', 'gray.800');
    return (
        <Text 
            lineHeight={'100px'}
            fontFamily={"'Inter', Arial, sans-serif"} 
            fontWeight="700"
            fontSize={'100px'}
            color={color}>
            {children}
        </Text>
    );
}

export default PerfomanceText