import React from 'react';
import { StyledButton, StyledLink, NavContainer, NavLinks } from '../assets/styles/NavBar-style';

export const NavBar: React.FC = () => {
  return (
    <NavContainer>
      <NavLinks>
        <StyledLink to="/">Luxora</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/services">Services</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
      </NavLinks>
      <StyledButton>Click me</StyledButton>
    </NavContainer>
  );
};
