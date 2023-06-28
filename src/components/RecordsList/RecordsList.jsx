import { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableCell, TableHead, TableHeadCell, TableRow } from "./RecordsList.styled";

const RecordsList = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
      axios
        .get('/api/score')
        .then(function (response) {
          setScores(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {});
    }, []);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Position</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Score</TableHeadCell>
          </TableRow>
        </TableHead>
        <tbody>
          {scores
            .sort((a, b) => b.value - a.value)
            .map((score, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{score.name}</TableCell>
                <TableCell>{score.value}</TableCell>
              </TableRow>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default RecordsList;
