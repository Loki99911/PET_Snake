export const createSnake = (
  snake,
  direction,
  fieldSize,
  setSnakeComponents
) => {
  const { row, col } = fieldSize;
  const newSnake = [...snake];
  const snakeHead = newSnake[newSnake.length - 1];
  //   let nextSq;
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
