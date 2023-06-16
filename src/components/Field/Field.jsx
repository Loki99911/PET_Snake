import React, { useEffect, useState } from 'react';
import { FieldSq, FieldWrapper } from './Field.styled';

const Field = () => {
  const fieldSize = { row: 20, col: 20 };
  const [direction, setDirection] = useState('');
  const [snakeLength, setSnakeLength] = useState([1, 2, 3]);

  function createField(fieldSize) {
    const { row, col } = fieldSize;
    const field = [];
    for (let i = 1; i <= row * col; i++) {
      field.push(<FieldSq id={i} key={i}></FieldSq>);
    }

    return field;
  }

  useEffect(() => {
    const onKeyDown = e => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection('Up');
          break;
        case 'ArrowDown':
          setDirection('Down');
          break;
        case 'ArrowLeft':
          setDirection('Left');
          break;
        case 'ArrowRight':
          setDirection('Right');
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);
 
  return (
    <FieldWrapper fieldSize={fieldSize}>{createField(fieldSize)}</FieldWrapper>
  );
};

export default Field;
