import React, { useEffect, useRef, useState } from 'react';
import { FieldWrapper } from './Field.styled';
import { createField } from 'helpers/createField';
import { createSnake } from 'helpers/createSnake';
import { createFood } from 'helpers/createFood';

const Field = ({
  snakeDirection,
  score,
  setScore,
  name,
  isPaused,
  snakeSpeed,
  snakeComponents,
  setSnakeComponents,
  setGame,
  setScoresList,
}) => {
  const fieldSize = { row: 20, col: 20 };
  const componentRefs = useRef({});
  const [foodComponent, setFoodComponent] = useState(null);
  const [foodPoint, setFoodPoint] = useState(null);
  const [gameInterval, setGameInterval] = useState(null);

  useEffect(() => {
    const targetRefs = snakeComponents.map(id => componentRefs.current[id]);
    targetRefs.forEach(ref => {
      ref.style.backgroundColor = '#ff00c8';
      ref.style.border = '1px solid transparent';
      ref.style.borderRadius = '5px';
    });
  }, [snakeComponents]);

  useEffect(() => {
    if (foodComponent) {
      const foodRef = componentRefs.current[foodComponent];
      foodRef.style.backgroundColor = 'greenyellow';
      foodRef.style.borderRadius = '50%';
      foodRef.innerText = '+' + foodPoint;
    }
  }, [snakeComponents, foodComponent, foodPoint]);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        const targetRefs = snakeComponents.map(id => componentRefs.current[id]);
        targetRefs.forEach(ref => {
          ref.removeAttribute('style');
        });
        createSnake(
          snakeComponents,
          snakeDirection,
          fieldSize,
          setSnakeComponents,
          foodComponent,
          foodPoint,
          setFoodComponent,
          componentRefs,
          score,
          setScore,
          name,
          setGame,
          setScoresList
        );
        !foodComponent &&
          createFood(
            fieldSize,
            snakeComponents,
            setFoodComponent,
            setFoodPoint
          );
      }, snakeSpeed);
      setGameInterval(interval); // Сохраняем интервал игры в состояние

      return () => {
        clearInterval(interval);
      };
    } else {
      clearInterval(gameInterval); // Очищаем интервал игры при паузе
    }
    // eslint-disable-next-line
  }, [snakeComponents, snakeDirection, isPaused]);

  return (
    <>
      <FieldWrapper fieldSize={fieldSize}>
        {createField(fieldSize, componentRefs, snakeSpeed)}
      </FieldWrapper>
    </>
  );
};

export default Field;
