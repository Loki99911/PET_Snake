import { ScoreText } from "./Score.styled";

const Score = ({ counterValue }) => {

  return <ScoreText>Score: {counterValue}</ScoreText>;
};

export default Score;
