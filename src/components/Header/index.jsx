import React from 'react';
import { Nav, Logo, Button, HomeButton, ButtonsContainer } from './styles';

const Header = () => {
  return (
    <Nav>
      <Logo src="/logo.png" alt="AluraFlix" />
      <ButtonsContainer>
        <HomeButton>Home</HomeButton>
        <Button>Nuevo video</Button>
      </ButtonsContainer>
    </Nav>
  );
};

export default Header;