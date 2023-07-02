import styled from 'styled-components';
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #005bbf;
  margin-bottom: 10px;
`;

export const Footer = styled.footer`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #ffd500;
  width: 100%;
`;


export const MainHeader = styled.h1`
  color: greenyellow;
  font-size: 36px;
`;

export const PartsContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 320px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    width: 1280px;
  }
`;

export const LeftPart = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const PauseBtn = styled.button`
  width: 100px;
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 3px;
  background-color: greenyellow;
  transition: background-color 350ms linear;

  :hover {
    background-color: yellow;
    border: 1px solid black;
  }
`;
export const NameLabel = styled.label`
  font-size: 24px;
  color: greenyellow;
`;
export const NameInput = styled.input`
  width: 250px;
  height: 30px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid black;
  margin-left: 10px;
  :active {
    border: 1px solid green;
  }
`;
