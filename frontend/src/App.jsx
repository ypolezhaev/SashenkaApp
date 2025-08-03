import * as React from 'react'
import { Box, ChakraProvider, Image } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import './App.css'
import HeaderForm from './components/header/HeaderForm'
import AboutForm from './components/about/About'
import PerfomanceForm from './components/perfomance/Perfomance';
import PortfolioForm from './components/projects/Portfolio'

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
    </>
  );
}

export default App
