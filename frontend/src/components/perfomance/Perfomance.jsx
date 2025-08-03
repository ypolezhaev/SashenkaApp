import { Box, Image, ChakraProvider, Container, Flex, Text, Link, useColorModeValue } from '@chakra-ui/react'
import PerfomanceText from './PerfomanceText';
import './Perfomance.css';
import { motion, useScroll, useTransform } from "framer-motion";

const MotionImage = motion(Image);

function ParfomanceForm() {

    const { scrollY } = useScroll();

    // Пример: когда scrollY от 0 до 300, opacity уходит от 1 до 0
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.6]);
    const translateY = useTransform(scrollY, [0, 300], [0, 130]);

    const imageStyle = { opacity, scale, y: translateY};
    return (
        <Box as="section" className='PerfomanceContainer'>
            <Container px={0} className='PerfomanceContentContainer'>
                <Container className='TextContainer'>
                    <Flex direction={'column'} align={'flex-start'} gap={0.4} >
                        <Container padding={0} maxWidth={'1200px'}>
                            <Flex direction={'row'} gap={'11px'}>
                                <Text zIndex={11} className={'LargeText black'}>привет,</Text>
                                <Text zIndex={11} className={'LargeText black'}>меня зовут</Text>
                            </Flex>
                        </Container>
                        <Container textAlign={'start'} maxWidth={'771px'} >
                            <Text zIndex={11} className={'LargeText black'}>александра</Text>
                        </Container>
                        <Container textAlign={'start'} maxWidth={'530px'} >
                            <Flex direction={'row'}>
                                <Text zIndex={11} className={'LargeText black'}>и я&nbsp;</Text>
                                <Text zIndex={11} className={'LargeText red'}>графический</Text>
                            </Flex>
                        </Container>
                        <Container textAlign={'start'} maxWidth={'530px'} >
                            <Text zIndex={11} className={'LargeText red'}>дизайнер</Text>
                        </Container>
                    </Flex>
                </Container>
                <Container px={0} top={'117px'} left={'0px'} maxWidth={'200px'} maxHeight={'200px'} position={'absolute'}>
                    <MotionImage zIndex={-1} style={imageStyle} initial={{rotate: 19}}  src='./cube.svg'/>
                </Container>
                <Container px={0} top={'24px'} left={'1106px'} maxWidth={'160px'} maxHeight={'160px'} position={'absolute'} >
                    <MotionImage zIndex={-1} style={imageStyle} src='./cursor.svg'/>
                </Container>
                <Container px={0} top={'335px'} left={'1161px'} maxWidth={'210px'} maxHeight={'210px'} position={'absolute'}>
                    <MotionImage zIndex={-1} style={imageStyle} initial={{rotate: 346}} src='./strawberry.svg'/>
                </Container>
                <Container px={0} top={'334px'} left={'83px'} maxWidth={'250px'} maxHeight={'250px'} position={'absolute'}>
                    <MotionImage zIndex={-1} style={imageStyle} initial={{rotate: 307}} src='./gl.svg'/>
                </Container>
                <Container px={0} top={'473px'} left={'380px'} maxWidth={'200px'} maxHeight={'200px'} position={'absolute'}>
                    <MotionImage zIndex={-1} style={imageStyle} initial={{rotate: 355}} src='./mug.svg'/>
                </Container>
                <Container px={0} top={'400px'} left={'730px'} maxWidth={'230px'} maxHeight={'230px'} position={'absolute'}>
                    <MotionImage zIndex={-1} style={imageStyle} initial={{rotate: 13}} src='./constructor.svg'/>
                </Container>
            </Container>
        </Box>
    );
}

export default ParfomanceForm