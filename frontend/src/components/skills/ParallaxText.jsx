import React, { useEffect  } from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './Skills.css';

const MotionText = motion(Text);
const MotionImage = motion(Image);

export function ParallaxText({className, top, left, type ,children}) {
  // motion-значения от 0 до 1
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // нормализуем в диапазон [-1, 1]
  const xNorm = useTransform(mouseX, [0, 1], [-1, 1]);
  const yNorm = useTransform(mouseY, [0, 1], [-1, 1]);

  // хук возвращает transform для элемента с данным коэффициентом
  const useParallax = (coefX, coefY) => ({
    x: useTransform(xNorm, v => v * coefX),
    y: useTransform(yNorm, v => v * coefY),
  });

  // создаём три слоя текста с разными коэффициентами
  const layerSlow  = useParallax(10, -5);   // медленно движется
  const layerFast  = useParallax(40, -20);  // быстро движется
  const layerOpp   = useParallax(-60, -40);// в обратную сторону

  useEffect(() => {
    const handleMouse = (e) => {
      // нормализуем координаты в [0,1]
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mouseX, mouseY]);

  const color = useColorModeValue('gray.800', 'whiteAlpha.900');

  return (
    <MotionText
        style={type === 'slow' ? layerSlow : (type === 'fast' ? layerFast : layerOpp)}
        position="absolute"
        top={top}
        left={left}
        className={className}
        color={color}>
        {children}
      </MotionText>
  );
}