import React, { useEffect, useState } from 'react';
import { SnakeSq } from './Snake.styled';

const Snake = ({ snakeDirection }) => {
  const [snakeLength, setSnakeLength] = useState([1, 2, 3]);

  function createSnake(snakeLength) {

    for (const part of snakeLength) {
      const snakeSqElement = React.createElement(SnakeSq);
      document.getElementById(part).append(snakeSqElement);
    }

    return;
  }

  return <>{createSnake(snakeLength)}</>;
};

export default Snake;
