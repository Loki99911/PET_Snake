import { useState } from 'react';
import Field from './Field/Field';
import Snake from './Snake/Snake';

export const App = () => {
  const [createdField, setCreatedField] = useState(false);
  const [snakeDirection, setSnakeDirection] = useState('Right');

  const handleFieldCreation = () => {
    setCreatedField(true);
  };

  return (
    <>
      <Field
        onFieldCreation={handleFieldCreation}
        setSnakeDirection={setSnakeDirection}
      />
      {createdField && <Snake direction={snakeDirection} />}
    </>
  );
};
