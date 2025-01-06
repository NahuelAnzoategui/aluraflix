import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  padding: 1rem 2rem;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(42, 122, 228, 0.5); /* Sombra azul brillante */
`;

export const Logo = styled.img`
  height: 40px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Button = styled.button`
  background: transparent;
  border: 1px solid #FFF;
  color: #FFF;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #FFF;
    color: #000;
  }
`;

export const HomeButton = styled(Button)`
  background: #2A7AE4;
  border-color: #2A7AE4;

  &:hover {
    background: #1E5DAD;
    color: #FFF;
    border-color: #1E5DAD;
  }
`;