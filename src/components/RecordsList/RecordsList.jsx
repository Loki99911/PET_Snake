import { useEffect} from "react";
import axios from "axios";
import { Table, TableCell, TableHead, TableHeadCell, TableRow } from "./RecordsList.styled";

const RecordsList = ({ scoresList, setScoresList }) => {
  
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
  
console.log("records Render");
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>Position</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Score</TableHeadCell>
        </TableRow>
      </TableHead>
      <tbody>
        {scoresList
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
  );
};

export default RecordsList;
