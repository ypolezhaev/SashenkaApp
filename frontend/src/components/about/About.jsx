import { Box, Image, ChakraProvider, Container, Flex, Text, Link, useColorModeValue } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from "framer-motion";
import './About.css';

function AboutForm() {
    return (
        <Box className={'AboutSection background-gray'}>
            <Container px={0} className='AboutContainer'>
                <Flex direction={'row'} align={'center'} display={'flex'} justifyContent={'space-between'} >
                    <Container px={0} className='AboutTextContainer' height={'auto'} width={'fit-content'} >
                        <Text className={'SmallText black'}>люблю работать</Text>
                        <Text className={'SmallText black'}>над проектами,</Text>
                        <Text className={'SmallText black'}>которые решают</Text>
                        <Text className={'SmallText red'}>реальные задачи</Text>
                    </Container>
                    <Container px={0} className='AboutTextContainer' height={'auto'} width={'fit-content'} >
                        <Text className={'LargeText red'}>{'>3'}</Text>
                        <Text className={'SmallText black'}>лет работы</Text>
                        <Text className={'SmallText black'}>в дизайне</Text>
                    </Container>
                    <Container px={0} className='AboutTextContainer' height={'auto'} width={'fit-content'} >
                        <Text className={'LargeText red'}>{'150+'}</Text>
                        <Text className={'SmallText black'}>задач успешно</Text>
                        <Text className={'SmallText black'}>закрыто</Text>
                    </Container>
                </Flex>
            </Container>
        </Box>
    );
}

export default AboutForm