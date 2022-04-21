import styled from 'styled-components';
import { FiMessageSquare } from 'react-icons/fi';

export const Container = styled.div`
  background: var(--color-link); //cor
  padding: 0 16px; o primeiro valor e pra cima pra baixo e o segundo é pra esquerda e direita

  height: 48px; //altura
  display: flex; //deixa os itens um do lado do outtro
  justify-content: space-between; //joga os itens pra longe
  align-items: center; //itens ficam centralizados 

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2; //header fica por cima de tudo

  @media (min-width: 1180px) { //quando a tela for grande
    display: none; // o header desaparece
  }
`;

export const MessageIcon = styled(FiMessageSquare)`
  height: 24px; //tamanho do icone
  width: 24px; 
  color: var(--color-white); //cor do icone
  border-radius: 4px; //borda
  flex-shrink: 0; //não ficará amassado quando a tela ficar pequena

  margin-left: 17px;
`;

export const SearchInput = styled.input`
  margin-left: 16px; // se destancia 16px para esquerda
  width: 100%;

  background: var(--color-input);//cor do input
  color: var(--color-black);// cor do texto
  font-size: 14px;
  padding: 7.5px 8px;
  border: none; //sem borda
  outline: none;
  border-radius: 2px;

//quando alguem clica ele fica bem branco
  &:focus {
    background: var(--color-white);
  }
`;

export const ProfileCircle = styled.img`
  width: 28px; //tamanho do perfil
  height: 28px; //altura do perfil
  border-radius: 50%; //deixa as bordas arredondadas
  border: 1px solid var(--color-icons); //deixa uma borda branca em volta do perfil
  flex-shrink: 0;
`;
