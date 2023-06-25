import { useState } from 'react';
import Field from './Field/Field';
// import Snake from './Snake/Snake';
import useControls from 'hooks/useControls';
export const App = () => {
  const [snakeDirection, setSnakeDirection] = useState('Right');

  useControls(setSnakeDirection);
  return (
    <>
      <Field snakeDirection={snakeDirection} />
    </>
  );
};
