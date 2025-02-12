import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  height: 10vh;
  padding: 0;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 3vw;
  margin-left: 3vw;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 2vh;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  font-size: 2vh;
  cursor: pointer;
  margin: 0.5vw; 
  &:hover {
    background-color: #555;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2vw;
`;
