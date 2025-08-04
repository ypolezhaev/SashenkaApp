import { Box, Container, Flex, Text, Image, Link } from '@chakra-ui/react'
import './Contacts.css';
import { color } from 'framer-motion';

function ContactsForm() {
    return (
        <Box id={'contacts'} className='ContactsSection background-gray'>
            <Container px={'0'} className='ContactsContainer'>
                <Text className='ContactsHeader MediumText black'>контакты</Text>
                <Flex px={'23px'} className='ContactsContentContainer' justifyContent={'flex-start'} direction={'row'}>
                    <Container mx={0} px={0} className='ContactsPhotoContainer' >
                        <Image height={'434px'} src='./Alexandra.png'></Image>
                    </Container>
                    <Container px={0} className='ContactsLinksContainer' >
                        <Flex direction={'column'} justifyContent={'space-between'}>
                            <Text marginTop={'34px'} className='ContactsLinksHeader'>поработать над проектом:</Text>
                            <Text className='ContactsLinksGrayText'>nomprenorm@gmail.com</Text>
                            <Container transition="all 0.2s ease" _hover={{color: '#4ab6eb', opacity: 0.8}} px={0} className='ContactsLinkContainer' backgroundColor={'#039be5'}>
                                <Text href="https://t.me/nomprenorm" className='ContactsLink'>telegram</Text>
                            </Container>
                            <Text marginTop={'34px'} className='ContactsLinksHeader'>познакомиться поближе:</Text>
                            <Flex justifyContent={'flex-start'} direction={'row'} gap={'6px'}>
                                <Container transition="all 0.2s ease" _hover={{color: '#5a80f4', opacity: 0.8}} px={0} className='ContactsLinkContainer' backgroundColor={'#114afa'}>
                                    <Text href="https://www.behance.net/nomprenorm" className='ContactsLink'>behance</Text>
                                </Container>
                                <Container  transition="all 0.2s ease" _hover={{color: '#ea4249', opacity: 0.8}} px={0} className='ContactsLinkContainer' backgroundColor={'#cb2027'}>
                                    <Text href="https://ru.pinterest.com/nomprenorm/" className='ContactsLink'>pinteres</Text>
                                </Container>
                                <Container transition="all 0.2s ease" _hover={{color: '#414141', opacity: 0.8}} px={0} className='ContactsLinkContainer' backgroundColor={'#0f0f0f'}>
                                    <Text href="https://dprofile.ru/nomprenorm" className='ContactsLink'>dprofile</Text>
                                </Container>
                            </Flex>
                        </Flex>
                    </Container>
                </Flex>
            </Container>
        </Box>
    );
}

export default ContactsForm