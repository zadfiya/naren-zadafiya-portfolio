import React from 'react';
import Text from '../../foundation/text';
import CircleVideo from './animation/circleVideo';
import ContainerHero, { TextContainer } from './style';
import Link from '../../common/link/link';

function Hero() {
  return (
    <ContainerHero>
      <TextContainer>
        <Text
          tag="p"
          variant="paragraph3"
          textAlign="left"
          marginBottom="12px"
          color="fonts.main"
        >
          Bonjour👋
        </Text>
        <Text
          tag="h3"
          variant="subTitle"
          textAlign="left"
          marginBottom="1px"
          color="fonts.main"
        >
          My Self
        </Text>
        <Text
          tag="h1"
          variant="titleXS"
          textAlign="left"
          marginBottom="12px"
          color="fonts.main"
        >
          Naren Zadafiya
        </Text>
        <Text
          tag="p"
          variant="paragraph3"
          textAlign="left"
          marginBottom="12px"
          color="fonts.main"
        >
          A Full Stack Software Developer🧑‍💻, currently located in Montreal, Canada🍁.
          I have keen interest for coding and developing software.
        </Text>
        <Link href="/contact" className="contato">
          <Text tag="span" variant="paragraph2" color="fonts.main">
            Contact
          </Text>
        </Link>
      </TextContainer>
      <CircleVideo />
    </ContainerHero>
  );
}

export default Hero;
