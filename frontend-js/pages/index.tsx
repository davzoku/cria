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
  useColorMode
} from '@chakra-ui/react';
import { useEffect, useState, useRef } from 'react';
import { MdAutoAwesome, MdBolt, MdEdit, MdPerson } from 'react-icons/md';
import avatar from '/public/img/avatars/avatar.png';
import avatar_rabbit from '/public/img/avatars/avatar_rabbit.png';
import { NextAvatar } from '@/components/image/Avatar';
import Bg from '../public/img/chat/bg4.png';

export default function Chat(props: { apiKeyApp: string }) {
  // *** If you use .env.local variable for your API key, method which we recommend, use the apiKey variable commented below
  const { apiKeyApp } = props;
  // Input States
  const [inputOnSubmit, setInputOnSubmit] = useState<string>('');
  const [inputCode, setInputCode] = useState<string>('');
  // Response message
  const [outputCode, setOutputCode] = useState<string>('');
  // ChatGPT model
  const [model, setModel] = useState<OpenAIModel>('gpt-3.5-turbo');
  // Loading state
  const [loading, setLoading] = useState<boolean>(false);

  const { colorMode } = useColorMode();

  const inputRef = useRef<HTMLInputElement>(null);
  
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
  const handleTranslate = async () => {
    const apiKey = apiKeyApp;
    setInputOnSubmit(inputCode);

    // Chat post conditions(maximum number of characters, valid message etc.)
    const maxCodeLength = model === 'gpt-3.5-turbo' ? 700 : 700;

    // if (!apiKeyApp?.includes('sk-') && !apiKey?.includes('sk-')) {
    //   alert('Please enter an API key.');
    //   return;
    // }

    if (!inputCode) {
      alert('Please enter your message.');
      return;
    }

    if (inputCode.length > maxCodeLength) {
      alert(
        `Please enter code less than ${maxCodeLength} characters. You are currently at ${inputCode.length} characters.`,
      );
      return;
    }
    setOutputCode(' ');
    setLoading(true);
    const controller = new AbortController();
    const body: ChatBody = {
      inputCode,
      model,
      apiKey,
    };

    // -------------- Fetch --------------
    const response = await fetch('/api/chatAPI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      body: JSON.stringify(body),
    });
    // if (!response.ok) {
    //   setLoading(false);
    //   if (response) {
    //     alert(
    //       'Something went wrong went fetching from the API. Make sure to use a valid API key.',
    //     );
    //   }
    //   return;
    // }
    let data;
    const defaultReply = "Zzz... Oh, hello! This baby llama needs a nap right now. Just so you know, I'm here for demo sessions only. If you have any questions, feel free to check the [FAQ section](/faq#why-is-cria-sleeping) or [contact my creator](mailto:walter.tengkw@gmail.com) for a live demo! Catch you on the flip side of dreamland! 💤 ";
    if (!response.ok) {
      setLoading(false);
      data = new ReadableStream({
        start(controller) {
          const encoder = new TextEncoder();
          const defaultChunks = encoder.encode(defaultReply);
    
          let index = 0;
          const chunkSize = 16; // Adjust the chunk size as needed
          const delay = 100; // Adjust the delay in milliseconds
    
          function enqueueChunk() {
            const chunk = defaultChunks.slice(index, index + chunkSize);
            index += chunkSize;
            controller.enqueue(chunk);
    
            if (index < defaultChunks.length) {
              setTimeout(enqueueChunk, delay);
            } else {
              controller.close();
            }
          }
    
          enqueueChunk();
        }
      });
    } else {
      data = response.body;
    }    

    if (!data) {
      setLoading(false);
      alert('Something went wrong');
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      setLoading(true);
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setOutputCode((prevCode) => prevCode + chunkValue);
    }

    setLoading(false);

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const renderHtmlContent = (html: string) => {
    return { __html: html };
  };  
  // -------------- Copy Response --------------
  // const copyToClipboard = (text: string) => {
  //   const el = document.createElement('textarea');
  //   el.value = text;
  //   document.body.appendChild(el);
  //   el.select();
  //   document.execCommand('copy');
  //   document.body.removeChild(el);
  // };

  // *** Initializing apiKey with .env.local value
  // useEffect(() => {
  // ENV file verison
  // const apiKeyENV = process.env.NEXT_PUBLIC_OPENAI_API_KEY
  // if (apiKey === undefined || null) {
  //   setApiKey(apiKeyENV)
  // }
  // }, [])

  const handleChange = (Event: any) => {
    setInputCode(Event.target.value);
  };

  return (
    <Flex
      w="100%"
      // pt={{ base: '70px' }}
      // align="flex-end"
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
      >
        {/* Model Change */}
        <Flex direction={'column'} w="100%" mb={outputCode ? '20px' : 'auto'}>
          <Flex
            mx="auto"
            zIndex="2"
            w="max-content"
            mb="20px"
            borderRadius="60px" 
          >
          </Flex>

        </Flex>
        {/* Main Box */}
        <Flex
          direction="column"
          w="100%"
          mx="auto"
          display={outputCode ? 'flex' : 'none'}
          mb={'auto'}
        >
          <Flex w="100%" align={'center'} mb="10px">
            <Flex
              borderRadius="full"
              justify="center"
              align="center"
              bg={'transparent'}
              border="1px solid"
              borderColor={borderColor}
              me="20px"
              h="40px"
              minH="40px"
              minW="40px"
            >
              {/* <Icon
                as={MdPerson}
                width="20px"
                height="20px"
                color={brandColor}
              /> */}
              <NextAvatar h="40px" w="40px" src={avatar_rabbit}  />
            </Flex>
            <Flex
              p="22px"
              border="1px solid"
              borderColor={borderColor}
              borderRadius="14px"
              w="100%"
              zIndex={'2'}
            >
              <Text
                color={textColor}
                fontWeight="600"
                fontSize={{ base: 'sm', md: 'md' }}
                lineHeight={{ base: '24px', md: '26px' }}
              >
                {inputOnSubmit}
              </Text>
              {/* <Icon
                cursor="pointer"
                as={MdEdit}
                ms="auto"
                width="20px"
                height="20px"
                color={gray}
              /> */}
            </Flex>
          </Flex>
          <Flex w="100%">
            <Flex
              borderRadius="full"
              justify="center"
              align="center"
              bg={'linear-gradient(15.46deg, #e125d8 26.3%, #7B5AFF 86.4%)'}
              me="20px"
              h="40px"
              minH="40px"
              minW="40px"
            >
              {/* <Icon
                as={MdAutoAwesome}
                width="20px"
                height="20px"
                color="white"
              /> */}
              <NextAvatar h="40px" w="40px" src={avatar}  />              
            </Flex>
            <MessageBoxChat output={outputCode} />
          </Flex>
        </Flex>
        {/* Chat Input */}
        <Flex
          ms={{ base: '0px', xl: '60px' }}
          mt="20px"
          justifySelf={'flex-end'}
        >
          <Input
            ref={inputRef}
            minH="54px"
            h="100%"
            border="1px solid"
            borderColor={borderColor}
            borderRadius="45px"
            p="15px 20px"
            me="10px"
            fontSize="sm"
            fontWeight="500"
            _focus={{ borderColor: 'none' }}
            color={inputColor}
            _placeholder={placeholderColor}
            placeholder="Type your message here..."
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault(); 
                handleTranslate(); 
              }
            }}            
          />
          <Button
            variant="primary"
            py="20px"
            px="16px"
            fontSize="sm"
            borderRadius="45px"
            ms="auto"
            w={{ base: '160px', md: '210px' }}
            h="54px"
            _hover={{
              boxShadow:
                '0px 21px 27px -10px rgba(96, 60, 255, 0.48) !important',
              bg:
                'linear-gradient(15.46deg, #e125d8 26.3%, #7B5AFF 86.4%) !important',
              _disabled: {
                bg: 'linear-gradient(15.46deg, #e125d8 26.3%, #7B5AFF 86.4%)',
              },
            }}
            onClick={handleTranslate}
            isLoading={loading ? true : false}
          >
            Submit
          </Button>
        </Flex>


      </Flex>
    </Flex>
  );
}
