import React, { useEffect, useState } from 'react';
import { SnakeSq } from './Snake.styled';

const Snake = direction => {
  const [snakeLength, setSnakeLength] = useState([1, 2, 3]);

  function createSnake(snakeLength) {
    for (const part of snakeLength) {
      document.getElementById(part).append(<SnakeSq/>)
    }

    return field;
  }

    return <>{createSnake(fieldSize)}</>;
};

export default Snake;
