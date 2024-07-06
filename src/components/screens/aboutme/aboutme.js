import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import Container, { Description, Channels, Image, Info
} from './style';

const AboutMe = () =>{
    return (
        <>
          <Container>
      <Text tag="h1" variant="titleXS">About Me</Text>
      <Box
        display="flex"
        flexDirection={{
          xs: 'column',
          md: 'row',
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Info>
          <Description>
            <Text tag="p" variant="paragraph3">
                Graduate student of computer science at the University of Southern California.
            </Text>
            <Text tag="p" variant="paragraph3">
            Talking about the future, I aspire to lead as a technical or product manager, working alongside skilled teams 
            to develop high-revenue products that cater to business and client needs. Through strategic leadership, 
            I aim to drive innovation and ensure organizational success.
            </Text>
          </Description>
        </Info>
        <Image>
          <img src="https://media.licdn.com/dms/image/D4E03AQE3_Ii7IadzoA/profile-displayphoto-shrink_800_800/0/1695646628584?e=1725494400&v=beta&t=T38Xu0kpBUqNv0CTyh19aRpPHZJaAb0ItYJ-2SsUgFw" alt="" />
        </Image>
      </Box>
    </Container>
        </>
    );
};

export default AboutMe;