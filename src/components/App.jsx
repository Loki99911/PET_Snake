import { useEffect, useState } from 'react'; // useMemo,
import Field from './Field/Field';
import useControls from 'hooks/useControls';
import Score from './Score/Score';
import {
  Footer,
  Header,
  LeftPart,
  MainHeader,
  NameInput,
  NameLabel,
  PartsContainer,
  PauseBtn,
} from './App.styled';
import RecordsList from './RecordsList/RecordsList';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  useControls({ snakeDirection, setSnakeDirection });

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
    <>
      <Header>
        <MainHeader>Snake</MainHeader>
      </Header>
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
            setScoresList={setScoresList}
          />
          <NameLabel>
            <b>Name:</b>
            <NameInput
              type="text"
              value={name}
              maxLength={30}
              onChange={handleNameChange}
              placeholder="Please, input your name! (max-30 symbol)"
            />
          </NameLabel>
          <PauseBtn onClick={handlePause} disabled={disableBtn}>
            {isPaused ? 'Play' : 'Pause'}
          </PauseBtn>
          <Score counterValue={counter} />
        </LeftPart>
        <RecordsList
          scoresList={scoresList}
          setScoresList={setScoresList}
          gameOver={gameOver}
        />
      </PartsContainer>
      <Footer>
        <p>
          Prodused by:{' '}
          <i>
            <a href="https://www.linkedin.com/in/mykyta-kresik/">
              Mykyta Kresik
            </a>
          </i>
        </p>
      </Footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
};
