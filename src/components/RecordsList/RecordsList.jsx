import { useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from './RecordsList.styled';

const RecordsList = ({ scoresList, setScoresList, gameOver }) => {
  useEffect(() => {
    axios
      .get('/api/score')
      .then(function (response) {
        setScoresList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, [setScoresList]);
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>Position</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Score</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {scoresList
          .sort((a, b) => b.value - a.value)
          .map((score, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{score.name}</TableCell>
              <TableCell>{score.value}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default RecordsList;
