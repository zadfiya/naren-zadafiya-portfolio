import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import FooterIcons from './footerIcons';

function Footer() {
  return (
    <Box
      textAlign="center"
      display="flex"
      justifyContent={{
        xs: 'center',
        md: 'space-between',
      }}
      alignItems="center"
      position="sticky"
      bottom="0"
      height="8vh"
    >
      <Text href="https://github.com/zadfiya" zIndex="18" target="_blank" rel="noopener noreferrer" tag="a" variant="paragraph3" color="fonts.main" textAlign="center">
        ©
        {new Date().getFullYear()}
        {' '}
        - N A R E N
      </Text>
      <Box
        display={{
          xs: 'none',
          md: 'initial',
        }}
      >
        <FooterIcons />
      </Box>
    </Box>
  );
}

export default Footer;
