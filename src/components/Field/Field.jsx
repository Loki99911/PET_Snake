import React, { useEffect, useRef, useState } from 'react';
import { FieldSq, FieldWrapper } from './Field.styled';

const Field = ({ snakeDirection }) => {
  const fieldSize = { row: 20, col: 20 };
  const componentRefs = useRef({});
  const [snakeComponents, setSnakeComponents] = useState([1, 2, 3]);

  const createField = fieldSize => {
    const { row, col } = fieldSize;
    const field = [];
    for (let i = 1; i <= row * col; i++) {
      field.push(
        <FieldSq
          id={i}
          key={i}
          ref={ref => (componentRefs.current[i] = ref)}
        ></FieldSq>
      );
    }
    return field;
  };

  const createNewSnake = (snake, direction) => {
    const { row, col } = fieldSize;
    const newSnake = [...snake];
    const snakeHead = newSnake[newSnake.length - 1];
    newSnake.splice(0, 1);
    switch (direction) {
      case 'Up':
        snakeHead - col <= 0
          ? newSnake.push(snakeHead + row * (col - 1))
          : newSnake.push(snakeHead - col);
        break;
      case 'Down':
        snakeHead + col > col * row
          ? newSnake.push((snakeHead + col) % col || col)
          : newSnake.push(snakeHead + col);
        break;
      case 'Left':
        (snakeHead - 1) % col === 0
          ? newSnake.push(snakeHead + col - 1)
          : newSnake.push(snakeHead - 1);
        break;
      case 'Right':
        snakeHead % col === 0
          ? newSnake.push(snakeHead - col + 1)
          : newSnake.push(snakeHead + 1);
        break;
      default:
        break;
    }
    setSnakeComponents(newSnake);
  };

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

      createNewSnake(snakeComponents, snakeDirection);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, [snakeComponents, snakeDirection]);

  console.log('rerender', snakeComponents);
  return (
    <>
      <FieldWrapper fieldSize={fieldSize}>
        {createField(fieldSize)}
      </FieldWrapper>
    </>
  );
};

export default Field;
