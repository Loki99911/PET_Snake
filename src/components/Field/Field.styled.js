import styled from 'styled-components';

export const FieldWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ fieldSize }) => `repeat(${fieldSize.col},40px)`};
  grid-template-rows: ${({ fieldSize }) => `repeat(${fieldSize.row},40px)`};
  border-radius: 1px;
`;

export const FieldSq = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #808080;
  transition: background-color 500ms ease-in;
`;
