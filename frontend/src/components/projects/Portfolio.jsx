import { Box, Container, Flex, Text } from '@chakra-ui/react'
import ProjectBlock from './ProjectBlock';
import './Portfolio.css';

function PortfolioForm() {
    return (
        <Box id={'portfolio'} className='PortfolioSection background-gray'>
            <Container px={'0'} className='PortfolioContainer'>
                <Text className='ProtfolioHeader MediumText black'>недавние проекты</Text>
                <Flex className='PortfolioContentContainer' direction={'column'}>
                    <Flex width='100%' direction={'row'} align={'center'} gap={6} >
                        <ProjectBlock src='./social_networks.png' href='https://www.behance.net/gallery/230664725/Social-Media-Design-Career-Platform'>оформление социальных сетей</ProjectBlock>
                        <ProjectBlock src='./presentation.png' href='#'>презентация</ProjectBlock>
                    </Flex>
                    <Flex width='100%' direction={'row'} align={'center'} gap={6} >
                        <ProjectBlock src='./syrix.png' href='https://www.behance.net/gallery/227892885/brand-identity-AI-platform'>айдентика/логотип/брендбук</ProjectBlock>
                    </Flex>
                    <Flex width='100%' direction={'row'} align={'center'} gap={6} >
                        <ProjectBlock src='./merch.png' href='https://www.behance.net/gallery/227825879/razrabotka-mercha-oformlenie-socsetej'>айдентика/мерч</ProjectBlock>
                        <ProjectBlock src='./commercial.png' href='https://www.behance.net/gallery/198122123/prezentacija-dlja-direktorskogo-foruma'>коммерческое предложение</ProjectBlock>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
}

export default PortfolioForm