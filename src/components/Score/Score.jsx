import { ScoreText } from './Score.styled';

const Score = ({ counterValue }) => {
  return (
    <b>
      <ScoreText>Score: {counterValue}</ScoreText>;
    </b>
  );
};

export default Score;
