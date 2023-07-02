import styled from 'styled-components';

export const PartsContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
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
  background-color: green;
  transition: background-color 350ms linear;

  :hover {
    background-color: yellow;
    border: 1px solid black;
  }
`;
