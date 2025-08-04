import { Box, Container, Flex, Text, Image } from '@chakra-ui/react'
import './Skills.css';
import { ParallaxText } from './ParallaxText';

const parallaxItems = [
  { text: 'ребрендинг', classname: 'ParallaxText36', top:  '130px', left:  '92px',  type: 'opp'  },
  { text: 'колористика', classname: 'ParallaxText30', top:  '212px', left: '32px',  type: 'fast' },
  { text: 'типографика', classname: 'ParallaxText36', top: '285px', left: '117px',  type: 'slow' },
  { text: 'визитки', classname: 'ParallaxText36', top: '437px', left: '75px',  type: 'opp'  },
  { text: 'ведение новостного блока', classname: 'ParallaxText30', top: '516px', left: '43px',  type: 'fast' },
  { text: 'гайдлайн', classname: 'ParallaxText32', top: '148px', left: '336px',  type: 'fast' },
  { text: 'брендбук', classname: 'ParallaxText36', top: '225px', left: '321px',  type: 'fast' },
  { text: 'флаеры', classname: 'ParallaxText25', top: '296px', left: '421px',  type: 'fast' },
  { text: 'плакаты', classname: 'ParallaxText32', top: '450px', left: '320px',  type: 'fast' },
  { text: 'методички', classname: 'ParallaxText32', top:' 38px', left: '478px',  type: 'fast' },
  { text: 'чек-листы', classname: 'ParallaxText30', top: '119px', left: '517px',  type: 'fast' },
  { text: 'брендбук', classname: 'ParallaxText36', top: '225px', left: '321px',  type: 'fast' },
  { text: 'гайды', classname: 'ParallaxText30', top: '80px', left: '755px',  type: 'fast' },
  { text: 'шаблоны', classname: 'ParallaxText30', top: '38px', left: '947px',  type: 'fast' },
  { text: 'коммерческие предложения', classname: 'ParallaxText36', top: '225px', left: '580px',  type: 'fast' },
  { text: 'нейросети', classname: 'ParallaxText30', top: '311px', left: '786px',  type: 'fast' },
  { text: 'прайсы', classname: 'ParallaxText25', top: '348px', left: '636px',  type: 'fast' },
  { text: 'иконки', classname: 'ParallaxText36', top: '364px', left: '975px',  type: 'fast' },
  { text: 'дизайн соц.сетей', classname: 'ParallaxText36', top: '419px', left: '553px',  type: 'fast' },
  { text: 'motion design', classname: 'ParallaxText36' , top: '442px', left: '890px',  type: 'fast' },
];

function SkillsForm() {
    return (
        <Box id={'skills'} className='SkillsSection background-gray'>
            <Container px={'0'} className='SkillsContainer'>
                <Text className='SkillsHeader MediumText black'>мои скилы</Text>
                <Flex className='SkillsContentContainer' position={'relative'} direction={'column'}>
                    {parallaxItems.map((item, i) => {
                        return <ParallaxText key={i} className={`${item.classname} LargeText`} top={item.top} left={item.left} type={item.type}>{item.text}</ParallaxText>
                    })}
                    <ParallaxText className={`ParallaxText56 LargeText`} top={'45px'} left={'40px'} type={'opp'}><Image src='./blue-sphere.svg'></Image></ParallaxText>
                    <ParallaxText className={`ParallaxText56 LargeText`} top={'135px'} left={'682px'} type={'opp'}><Image src='./gray-cube.svg'></Image></ParallaxText>
                    <ParallaxText className={`ParallaxText56 LargeText`} top={'351px'} left={'116px'} type={'opp'}><Image src='./pyramide.svg'></Image></ParallaxText>
                    <ParallaxText className={`ParallaxText56 LargeText`} top={'494px'} left={'514px'} type={'opp'}><Image src='./krug.svg'></Image></ParallaxText>
                </Flex>
            </Container>
        </Box>
    );
}

export default SkillsForm