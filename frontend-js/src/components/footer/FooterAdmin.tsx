'use client';

/*eslint-disable*/

import {
  Flex,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from '@/components/link/Link';

export default function Footer() {
  const textColor = useColorModeValue('gray.500', 'white');
  return (
    <Flex
    justify="center"
    direction="row"
    alignItems="center"
  >

    <Link href="https://huggingface.co/davzoku/cria-llama2-7b-v1.3">
      <Text
        fontSize="xs"
        color={textColor}
        fontWeight="500"
        textDecoration="underline"
      >
        CRIA Version 1.3
      </Text>
    </Link>
    <Text fontSize="xs" textAlign="center" color={textColor}>
    &nbsp;by&nbsp;
      </Text>
    <Link href="https://walterteng.com">
      <Text
        fontSize="xs"
        color={textColor}
        fontWeight="500"
        textDecoration="underline"
      >
        Walter Teng
      </Text>
    </Link>
  </Flex>
  );
}
