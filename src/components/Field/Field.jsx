import React, { useEffect, useRef, useState } from 'react';
import { FieldWrapper } from './Field.styled';
import { createField } from 'helpers/createField';
import { createSnake } from 'helpers/createSnake';
import { createFood } from 'helpers/createFood';

const Field = ({ snakeDirection }) => {
  const fieldSize = { row: 20, col: 20 };
  const componentRefs = useRef({});
  const [snakeComponents, setSnakeComponents] = useState([1, 2, 3]);
  const [foodComponent, setFoodComponent] = useState(null);
  const [foodPoint, setFoodPoint] = useState(null);

  useEffect(() => {
    const targetRefs = snakeComponents.map(id => componentRefs.current[id]); // Обращаемся к компонентам с нужными ID после рендера
    targetRefs.forEach(ref => {
      ref.style.backgroundColor = 'red'; // Здесь можно указать нужный вам цвет
    });
    // if (foodComponent) {
    //   const foodRef = componentRefs.current[foodComponent];
      
    //   foodRef.style.backgroundColor = 'green';
    //   foodRef.innerText = '+' + foodPoint;
    // }
    // eslint-disable-next-line
  }, [snakeComponents]);

  useEffect(() => {
    if (foodComponent) {
      const foodRef = componentRefs.current[foodComponent];

      foodRef.style.backgroundColor = 'green';
      foodRef.innerText = '+' + foodPoint;
    }
  }, [snakeComponents, foodComponent, foodPoint]);

  useEffect(() => {
    if (foodComponent) {
        const foodRef = componentRefs.current[foodComponent];
        foodRef.removeAttribute('style'); // Remove inline styles for food component
        foodRef.innerText = '';
      }
  }, [foodComponent]);

  useEffect(() => {
    const interval = setInterval(() => {
      const targetRefs = snakeComponents.map(id => componentRefs.current[id]); // Обращаемся к компонентам с нужными ID после рендера
      targetRefs.forEach(ref => {
        ref.removeAttribute('style');
      });
      // if (foodComponent) {
      //   const foodRef = componentRefs.current[foodComponent];
      //   foodRef.removeAttribute('style'); // Remove inline styles for food component
      //   // foodRef.innerText = '';
      // }
      createSnake(
        snakeComponents,
        snakeDirection,
        fieldSize,
        setSnakeComponents,
        foodComponent,
        setFoodComponent,
        componentRefs
      );
      !foodComponent &&
        createFood(fieldSize, snakeComponents, setFoodComponent, setFoodPoint);
    }, 300);
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
