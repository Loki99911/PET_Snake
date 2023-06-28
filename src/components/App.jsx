import { useEffect, useState } from 'react';
import Field from './Field/Field';
import useControls from 'hooks/useControls';
import Score from './Score/Score';
import { LeftPart, PartsContainer, PauseBtn } from './App.styled';
import RecordsList from './RecordsList/RecordsList';
import axios from 'axios';
export const App = () => {
  const [snakeDirection, setSnakeDirection] = useState('Right');
  const [counter, setCounter] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [speed, setSpeed] = useState(500);
  const [name, setName] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);

  axios.defaults.baseURL = 'http://localhost:8080';


  useControls(setSnakeDirection);

  useEffect(() => {
    setSpeed(500 - Math.floor(counter / 50) * 100);
  }, [counter]);

  useEffect(() => {
    name ? setDisableBtn(false) : setDisableBtn(true);
  }, [name]);

  const handleNameChange = event => {
    setName(event.target.value);
  };
  const handlePause = () => {
    setIsPaused(!isPaused);
  };
  return (
    <>
      <PartsContainer>
        <LeftPart>
          <Field
            snakeDirection={snakeDirection}
            setScore={setCounter}
            isPaused={isPaused}
            snakeSpeed={speed}
          />
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Please, input your name!"
            />
          </label>
          <PauseBtn onClick={handlePause} disabled={disableBtn}>
            {isPaused ? 'Resume' : 'Pause'}
          </PauseBtn>
          <Score counterValue={counter} />
        </LeftPart>
        <RecordsList />
      </PartsContainer>
    </>
  );
};
