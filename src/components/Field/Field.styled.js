import styled from 'styled-components';

export const FieldWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ fieldSize }) => `repeat(${fieldSize.col},30px)`};
  grid-template-rows: ${({ fieldSize }) => `repeat(${fieldSize.row},30px)`};
  border-radius: 1px;
  border: 2px solid black;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const FieldSq = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color ${({ snakeSpeed }) =>
   `${snakeSpeed}ms`} ease-in;
`;
