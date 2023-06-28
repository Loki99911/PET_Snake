import axios from 'axios';
import { useEffect, useState } from 'react';

const Score = ({ counterValue }) => {
  const [scores, setScores] = useState();

  useEffect(() => {
    axios
      .get('/api/score')
      .then(function (response) {
        setScores(response.data.data.result);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  console.log(scores);
  return <p>Score: {counterValue}</p>;
};

export default Score;
