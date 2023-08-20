'use client';

import { ButtonProps, Button } from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

type LinkProps = ButtonProps & NextLinkProps;

function Link({ href, children, ...props }: LinkProps) {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <Button as="a" variant="a" {...props}>
        {children}
      </Button>
    </NextLink>
  );
}

export default Link;
