import React from 'react';
import { FooterContainer, FooterLogo, Copyright } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo src="/logo.png" alt="AluraFlix" />
      <Copyright>
        Creado por Marcelo Yrala para Alura Latam - 2024
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;