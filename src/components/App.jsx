import { useState } from 'react';
import Field from './Field/Field';
import Snake from './Snake/Snake';

export const App = () => {
  const [createdField, setCreatedField] = useState(false);

  const handleFieldCreation = () => {
    setCreatedField(true);
  };

  return (
    <>
      <Field setCreated={handleFieldCreation} />
      {createdField && <Snake />}
    </>
  );
};
