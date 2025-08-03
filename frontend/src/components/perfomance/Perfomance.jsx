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
        <Box as="section" className='PerfomanceContainer' position='relative'>
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
            <Box>
                
            </Box>
            <MotionImage zIndex={-1} style={imageStyle} initial={{rotate: 19}} top={'117px'} left={'252.5px'} maxWidth={'200px'} maxHeight={'200px'} position={'absolute'} src='./cube.svg'/>
            <MotionImage zIndex={-1} style={imageStyle} top={'24px'} left={'1358.5px'} maxWidth={'160px'} maxHeight={'160px'} position={'absolute'} src='./cursor.svg'/>
            <MotionImage zIndex={-1} style={imageStyle} initial={{rotate: 346}} top={'369.5px'} left={'1413.5px'} maxWidth={'210px'} maxHeight={'210px'} position={'absolute'} src='./strawberry.svg'/>
            <MotionImage zIndex={-1} style={imageStyle} initial={{rotate: 307}} top={'369.5px'} left={'335.5px'} maxWidth={'250px'} maxHeight={'250px'} position={'absolute'} src='./gl.svg'/>
            <MotionImage zIndex={-1} style={imageStyle} initial={{rotate: 355}} top={'473px'} left={'632.5px'} maxWidth={'200px'} maxHeight={'200px'} position={'absolute'} src='./mug.svg'/>
            <MotionImage zIndex={-1} style={imageStyle} initial={{rotate: 13}} top={'400px'} left={'982.5px'} maxWidth={'230px'} maxHeight={'230px'} position={'absolute'} src='./constructor.svg'/>
        </Box>
    );
}

export default ParfomanceForm