import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import Button from '../../common/button/button';
import ContainerContato, { RedesSociais, ContatoModal } from './style';
import Modal from '../../common/modal/modal';
import ContactForm from '../../forms/contactForm/contactForm';

function Contato() {
  const [isModalOpen, setModalState] = React.useState(false);
  const title = "Let's Talk";
  return (
    <ContainerContato>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(propsDoModal) => (
          <ContactForm propsDoModal={propsDoModal} setModalState={setModalState} />
        )}
      </Modal>
      <ContatoModal>
        <Button
          id="button"
          title="Let's talk?"
          ghost
          onClick={() => {
            setModalState(!isModalOpen); // novo state sendo atribuido
          }}
        >
          <Text tag="p" id="contato" variant="titleXS" color="fonts.main">
          {title}
          </Text>
        </Button>
      </ContatoModal>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={{
          xs: 'justify',
          md: 'space-between',
        }}
      >
        <Text tag="p" variant="paragraph3">Social Networks</Text>
        <RedesSociais>
          <Text
            tag="a"
            href="https://www.linkedin.com/in/naren-zadafiya/"
            variant="paragraph1XS"
            target="_blank"
            rel="noopener noreferrer"
            title="Likedin"
            color="fonts.main"
          >
            Linkedin
          </Text>
          <Text
            tag="a"
            href="https://github.com/zadfiya"
            variant="paragraph1XS"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            color="fonts.main"
          >
            Github
          </Text>
          {/* <Text
            tag="a"
            href="https://codepen.io/carolandrade1"
            variant="paragraph1XS"
            target="_blank"
            rel="noopener noreferrer"
            title="Codepen"
            color="fonts.main"
          >
            Codepen
          </Text> */}
        </RedesSociais>
      </Box>
    </ContainerContato>
  );
}

export default Contato;
