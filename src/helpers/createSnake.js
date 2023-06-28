export const createSnake = (
  snake,
  direction,
  fieldSize,
  setSnakeComponents,
  foodComponent,
  foodPoint,
  setFoodComponent,
  componentRefs,
  setScore,
  setGame
) => {
  const { row, col } = fieldSize;
  const newSnake = [...snake];
  const snakeHead = newSnake[newSnake.length - 1];
  let nextSq;

  switch (direction) {
    case 'Up':
      nextSq =
        snakeHead - col <= 0 ? snakeHead + row * (col - 1) : snakeHead - col;
      newSnake.push(nextSq);
      break;
    case 'Down':
      nextSq =
        snakeHead + col > col * row
          ? (snakeHead + col) % col || col
          : snakeHead + col;
      newSnake.push(nextSq);
      break;
    case 'Left':
      nextSq =
        (snakeHead - 1) % col === 0 ? snakeHead + col - 1 : snakeHead - 1;
      newSnake.push(nextSq);
      break;
    case 'Right':
      nextSq = snakeHead % col === 0 ? snakeHead - col + 1 : snakeHead + 1;
      newSnake.push(nextSq);
      break;
    default:
      break;
  }

  if (nextSq === foodComponent) {
    const foodRef = componentRefs.current[foodComponent];
    setScore(prev => prev + foodPoint);
    setFoodComponent(null);
    foodRef.removeAttribute('style');
    foodRef.innerText = '';
  } else if (snake.includes(nextSq)) {
    alert('GAME OVER');
    setGame(true)
  } else {
    newSnake.splice(0, 1);
  }

  setSnakeComponents(newSnake);
};
