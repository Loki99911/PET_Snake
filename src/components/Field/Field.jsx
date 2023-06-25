import React, { useEffect, useRef, useState } from 'react';
import { FieldWrapper } from './Field.styled';
import { createField } from 'helpers/createField';
import { createSnake } from 'helpers/createSnake';

const Field = ({ snakeDirection }) => {
  const fieldSize = { row: 20, col: 20 };
  const componentRefs = useRef({});
  const [snakeComponents, setSnakeComponents] = useState([1, 2, 3]);

  useEffect(() => {
    const targetRefs = snakeComponents.map(id => componentRefs.current[id]); // Обращаемся к компонентам с нужными ID после рендера
    targetRefs.forEach(ref => {
      ref.style.backgroundColor = 'red'; // Здесь можно указать нужный вам цвет
    });
  }, [snakeComponents]);

  useEffect(() => {
    const interval = setInterval(() => {
      const targetRefs = snakeComponents.map(id => componentRefs.current[id]); // Обращаемся к компонентам с нужными ID после рендера
      targetRefs.forEach(ref => {
        ref.removeAttribute('style');
      });

      createSnake(
        snakeComponents,
        snakeDirection,
        fieldSize,
        setSnakeComponents
      );
    }, 1000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, [snakeComponents, snakeDirection]);

  return (
    <>
      <FieldWrapper fieldSize={fieldSize}>
        {createField(fieldSize, componentRefs)}
      </FieldWrapper>
    </>
  );
};

export default Field;
