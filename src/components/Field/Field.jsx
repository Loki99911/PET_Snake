import React, { useEffect} from 'react';
import { FieldSq, FieldWrapper } from './Field.styled';
import useControls from 'hooks/useControls';

const Field = ({ onFieldCreation, setSnakeDirection }) => {
  const fieldSize = { row: 20, col: 20 };
  useControls(setSnakeDirection);
  const createField = fieldSize => {
    const { row, col } = fieldSize;
    const field = [];
    for (let i = 1; i <= row * col; i++) {
      field.push(<FieldSq id={i} key={i}></FieldSq>);
    }
    return field;
  };

  useEffect(() => {
    onFieldCreation(); // Вызываем функцию onFieldCreation для обновления состояния в компоненте App
  }, [onFieldCreation]);

  return (
    <>
      <FieldWrapper fieldSize={fieldSize}>
        {createField(fieldSize)}
      </FieldWrapper>
    </>
  );
};

export default Field;
