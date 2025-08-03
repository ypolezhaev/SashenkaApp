import { Image, Flex, Text, Link } from '@chakra-ui/react'

function ProjectBlock({src, href, children}) {
    return (
        <Flex flex={1} textAlign={'left'} direction={'column'} gap={3} >
            <Link href={href} width={'100%'}>
                <Image 
                    filter="grayscale(100%)"
                    transition="0.3s ease" 
                    _hover={{ filter: 'grayscale(0%)' }} 
                    src={src} />
            </Link>
            <Text marginLeft={0} fontSize={'32px'} lineHeight={'32px'} color={'#111111'}  className='SmallText black'>{children}</Text>
        </Flex>
        
    );
}

export default ProjectBlock