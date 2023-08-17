'use client';
/*eslint-disable*/

import Link from '@/components/link/Link';
import MessageBoxChat from '@/components/MessageBox';
import { ChatBody, OpenAIModel } from '@/types/types';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Img,
  Input,
  Text,
  useColorModeValue,
  useColorMode,
  Heading
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { MdAutoAwesome, MdBolt, MdEdit, MdPerson } from 'react-icons/md';
import avatar from '/public/img/avatars/avatar.png';
import avatar_rabbit from '/public/img/avatars/avatar_rabbit.png';
import { NextAvatar } from '@/components/image/Avatar';
import Bg from '../public/img/chat/bg4.png';
import { faqData } from '../src/constants/faqData';


export default function Chat(props: { apiKeyApp: string }) {
  const router = useRouter();
  const { asPath } = router;

  useEffect(() => {// Debugging: Check the value of asPath
    if (asPath.includes("#")) {
      const hash = asPath.split("#")[1];
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [asPath]);


  const { colorMode } = useColorMode();
  
  // API Key
  // const [apiKey, setApiKey] = useState<string>(apiKeyApp);
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');
  const inputColor = useColorModeValue('navy.700', 'white');
  const iconColor = useColorModeValue('brand.500', 'white');
  const bgIcon = useColorModeValue(
    'linear-gradient(180deg, #FBFBFF 0%, #CACAFF 100%)',
    'whiteAlpha.200',
  );
  const brandColor = useColorModeValue('brand.500', 'white');
  const buttonBg = useColorModeValue('white', 'whiteAlpha.100');
  const gray = useColorModeValue('gray.500', 'white');
  const buttonShadow = useColorModeValue(
    '14px 27px 45px rgba(112, 144, 176, 0.2)',
    'none',
  );
  const textColor = useColorModeValue('navy.700', 'white');
  const placeholderColor = useColorModeValue(
    { color: 'gray.500' },
    { color: 'whiteAlpha.600' },
  );

  return (
    <Flex
      w="100%"

      direction="column"
      position="relative"
    >
      {/* <Img
        src={Bg.src}
        position={'absolute'}
        w="450px"
        left="50%"
        top="40%"
        transform={'translate(-50%, -50%)'}
        style={{ 
          opacity: 0.1,
          filter: colorMode == 'dark' ? 'invert(1)' : 'none' // Apply invert filter only if colorMode is light
        }}
      /> */}
      <Img
        src={Bg.src}
        position="fixed" // Set the position to fixed
        w="450px"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
        zIndex="-1" // Place the background image behind the content
        opacity={0.1}
        filter={colorMode === 'dark' ? 'invert(1)' : 'none'}
      />      
      <Flex
        direction="column"
        mx="auto"
        w={{ base: '100%', md: '100%', xl: '100%' }}
        minH={{ base: '75vh', '2xl': '85vh' }}
        maxW="1000px"
        pt="10%"
        pb="5%"
      >
        {/* FAQ Section */}
        <Box>
          <a href="#faq">
            <Heading as='h2' mb="10">
              FAQ
            </Heading>
          </a>
          {faqData.map((faq, index) => (
            <Box id={`${faq.shortHeader}`} mb="10">
              <a href={`#${faq.shortHeader}`}>
                <Heading as='h3' fontWeight="bold" size="md"  mb="3" dangerouslySetInnerHTML={{ __html: faq.question }} />
              </a>
              <Text mb="10" dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </Box>
          ))}
        </Box>
      </Flex>
    </Flex>
  );
}
