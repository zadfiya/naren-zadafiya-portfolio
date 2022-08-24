import React from 'react';
import Button from '../../common/button/button';
import Container404, { Erro, GoBack } from './style';

function NotFound() {
  return (
    <Container404>
      <Erro>
        <img src="/images/erro404.svg" alt="" />
      </Erro>
      <GoBack>
        <Button href="/" className="voltar">Back to start</Button>
        <img src="/images/dontsee.webp" alt="You did not see anything!" />
      </GoBack>
    </Container404>
  );
}

export default NotFound;
