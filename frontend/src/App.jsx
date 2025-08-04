import * as React from 'react'
import { Box, ChakraProvider, Image, Text } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import './App.css'
import HeaderForm from './components/header/HeaderForm'
import AboutForm from './components/about/About'
import PerfomanceForm from './components/perfomance/Perfomance';
import PortfolioForm from './components/projects/Portfolio'
import SkillsForm from './components/skills/Skills';
import ContactsForm from './components/contacts/Contacts'

function App() {
  return (
    <>
      <Box
        as={'section'}
        className='HeaderContainer'>
        <Image
            src='./packet.png'
            className='HeaderImage'/>
        <HeaderForm />
        <PerfomanceForm />
      </Box>
      <AboutForm/>
      <PortfolioForm/>
      <SkillsForm/>
      <ContactsForm/>
      <Box
        as={'section'}
        className='EndContainer'>
        <Image
            src='./packet_end.png'
            className='HeaderImage'/>
          <Text mx={'auto'} className='LargeText' marginTop={'108px'}>2025</Text>
      </Box>
    </>
  );
}

export default App
