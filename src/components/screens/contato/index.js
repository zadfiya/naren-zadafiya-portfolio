import React from 'react';
import Box from '../../foundation/box';
import Text from '../../foundation/text';
import Button from '../../common/button/button';
import ContainerContato, { RedesSociais, ContatoModal } from './style';
import Modal from '../../common/modal/modal';
import ContactForm from '../../forms/contactForm/contactForm';

function Contato() {
  const [isModalOpen, setModalState] = React.useState(false);

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
          title="Vamos conversar?"
          ghost
          onClick={() => {
            setModalState(!isModalOpen); // novo state sendo atribuido
          }}
        >
          <Text tag="p" id="contato" variant="titleXS" color="fonts.main">
            Vamos conversar?
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
        <Text tag="p" variant="paragraph3">Redes Sociais</Text>
        <RedesSociais>
          <Text
            tag="a"
            href="https://www.linkedin.com/in/carolandrade1/"
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
            href="https://github.com/carolandrade1"
            variant="paragraph1XS"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            color="fonts.main"
          >
            Github
          </Text>
          <Text
            tag="a"
            href="https://codepen.io/carolandrade1"
            variant="paragraph1XS"
            target="_blank"
            rel="noopener noreferrer"
            title="Codepen"
            color="fonts.main"
          >
            Codepen
          </Text>
        </RedesSociais>
      </Box>
    </ContainerContato>
  );
}

export default Contato;
