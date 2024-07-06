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
            A versatile software engineer with a passion for leadership, seeking
            a challenging role to leverage technical prowess and deliver
            exceptional software solutions. Proficient at quickly adapting to
            diverse technologies and environments, I excel with mentorship and
            embrace new opportunities. Committed to continuous learning and
            driving innovation, I aspire to make a meaningful impact by
            optimizing processes, elevating organizational performance, and
            staying at the forefront of technology trends.
            </Text>
            <Text tag="p" variant="paragraph3">
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