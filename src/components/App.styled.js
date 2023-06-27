import styled from 'styled-components';

export const PartsContainer = styled.main`
  display: flex;
  flex-direction: row;
`;

export const LeftPart = styled.div`
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
