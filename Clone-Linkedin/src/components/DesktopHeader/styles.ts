import styled, { css } from 'styled-components';
import { GrLinkedin } from 'react-icons/gr';
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from 'react-icons/ai';

export const Container = styled.div`
  background: var(--color-header);//cor de fundo do header
  padding: 0 30px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2; //passará por cima de todo elemento da tela

  display: none;
  
//só aparecerá quando a tela for 1180px
  @media (min-width: 1180px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: flex; //deixa um do lado do outro
  justify-content: space-between; //joga o inten lá longe
  flex: 1;// consumirá o maximo de espaço que ele conseguir

  max-width: 1128px;
  margin: 0 auto;
  height: 52px; //altura

  .left, 
  .right nav {
    display: flex;
    align-items: center;
  }

  .right nav {
    height: 100%;

    button {
      background: none; //sem cor de fundo
      border: 0;
      outline: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 90px; //espaço entre os botões
      min-height: 100%;

      color: var(--color-icons);
      cursor: pointer; //deixa uma mãozinha
      &:hover { //ao passar o mouse a cor do icone ficará branca
        color: var(--color-white);
      }
      &.active { //o botão que for ativo ficará na cor branca
        border-bottom: 2px solid var(--color-white);
      }
    }
  }
`;

export const LinkedInIcon = styled(GrLinkedin)`
  height: 34px; //altura
  width: 34px; //largura
  color: var(--color-linkedin);
  background-color: #fff;
  border-radius: 4px; //borda redonda
  flex-shrink: 0; //não fica amassado com tela pequena
`;

export const SearchInput = styled.input`
  margin-left: 12px;

  background: var(--color-input);
  color: var(--color-black);
  font-size: 14px;
  padding: 7.5px 8px;
  border: none;
  outline: none;
  border-radius: 2px;

  &:focus { //quando alguém clicar nele ele ficará branco
    background: var(--color-white);
  }
`;

//css aplicado para todos os icones
const generalIconCSS = css`
  width: 24px;
  height: 24px;
`;

export const HomeIcon = styled(AiFillHome)`
  ${generalIconCSS}
`;

export const NotificationsIcon = styled(AiOutlineBell)`
  ${generalIconCSS}
`;

export const ProfileCircle = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%; //deixa arredondado
  border: 1px solid var(--color-icons);
`;

export const CaretDownIcon = styled(AiFillCaretDown)`
  width: 16px;
  height: 16px;
`;
