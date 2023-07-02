import { useEffect, useState } from 'react'; // useMemo,
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
  const [snakeComponents, setSnakeComponents] = useState([1, 2, 3]);
  const [speed, setSpeed] = useState(500);
  const [name, setName] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);
  const [gameOver, setGameOver] = useState(true);
  const [scoresList, setScoresList] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  axios.defaults.baseURL = API_URL;

  useControls(setSnakeDirection);

  useEffect(() => {
    if (gameOver) {
      setSnakeDirection('Right');
      setCounter(0);
      setIsPaused(true);
      setSnakeComponents([1, 2, 3]);
      setSpeed(500);
      setName('');
      setDisableBtn(true);
    }
  }, [gameOver]);

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
    if (gameOver) {
      setGameOver(false);
    }
  };

  return (
    <PartsContainer>
      <LeftPart>
        <Field
          snakeDirection={snakeDirection}
          score={counter}
          setScore={setCounter}
          name={name}
          isPaused={isPaused}
          snakeSpeed={speed}
          snakeComponents={snakeComponents}
          setSnakeComponents={setSnakeComponents}
          setGame={setGameOver}
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
      <RecordsList
        scoresList={scoresList}
        setScoresList={setScoresList}
        gameOver={gameOver}
      />
    </PartsContainer>
  );
};
