export const createFood = (
  fieldSize,
  snakeComponents,
  setFoodComponent,
  setFoodPoint
) => {
  const { row, col } = fieldSize;
  const points = [1, 5, 10];
  const foodSq = Math.round(Math.random() * row * col);
  const randomId = Math.round(Math.random() * (points.length - 1));
  setFoodPoint(points[randomId]);
  snakeComponents.includes(foodSq) &&
    createFood(fieldSize, snakeComponents, setFoodComponent);
  setFoodComponent(foodSq);
  return;
};
