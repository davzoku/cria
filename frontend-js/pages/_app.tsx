'use client';
import type { AppProps } from 'next/app';
import { ChakraProvider, Box, Portal, Flex, useDisclosure } from '@chakra-ui/react';
import theme from '@/theme/theme';
import routes from '@/routes';
import Sidebar from '@/components/sidebar/Sidebar';
import Footer from '@/components/footer/FooterAdmin';
import Navbar from '@/components/navbar/NavbarAdmin';
import { getActiveRoute, getActiveNavbar } from '@/utils/navigation';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import '@/styles/App.css';
import '@/styles/Contact.css';
import '@/styles/Plugins.css';
import '@/styles/MiniCalendar.css';

function App({ Component, pageProps }: AppProps<{}>) {
  const pathname = usePathname();
  const [apiKey, setApiKey] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    const initialKey = localStorage.getItem('apiKey');
    if (initialKey?.includes('sk-') && apiKey !== initialKey) {
      setApiKey(initialKey);
    }
  }, [apiKey]);

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Sidebar setApiKey={setApiKey} routes={routes} />
        <Box
          pt="auto"
          float="right"
          minHeight="100vh"
          height="100%"
          overflow="auto"
          position="relative"
          maxHeight="100%"
          w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
          maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
          // transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          // transitionDuration=".2s, .2s, .35s"
          // transitionProperty="top, bottom, width"
          // transitionTimingFunction="linear, linear, ease"
        >
          <Portal>
            <Box>
              <Navbar
                setApiKey={setApiKey}
                onOpen={onOpen}
                logoText={'Horizon UI Dashboard PRO'}
                brandText={getActiveRoute(routes, pathname)}
                secondary={getActiveNavbar(routes, pathname)}
              />
            </Box>
          </Portal>
          <Flex
            direction="column"
            mx="auto"
            px={{ base: '20px', md: '30px' }}
            mt="auto"
            mb="auto"
            w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
            maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
            justifyContent="flex-end" // Align content at the bottom
            minHeight="100vh" // Make sure the container takes up at least the full viewport height
          >
            <Box>
              <Component apiKeyApp={apiKey} {...pageProps} />
            </Box>

            <Box>
              <Footer />
            </Box>
          </Flex>

        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
