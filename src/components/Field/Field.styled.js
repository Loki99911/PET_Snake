import styled from 'styled-components';

export const FieldWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ fieldSize }) => `repeat(${fieldSize.col},30px)`};
  grid-template-rows: ${({ fieldSize }) => `repeat(${fieldSize.row},30px)`};
  border-radius: 1px;
`;

export const FieldSq = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #808080;
  transition: background-color ${({ snakeSpeed }) =>
   `${snakeSpeed}ms`} ease-in;
`;
