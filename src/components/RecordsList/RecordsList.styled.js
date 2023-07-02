import styled from 'styled-components';

export const Table = styled.table`
  display: inline;
  border-collapse: collapse;
  margin: 0 auto;
  @media screen and (min-width: 1280px) {
    display: inline;
    border-collapse: collapse;
    margin: 0;
    margin-left: 30px;
  }
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
  border: 2px solid black;

`;

export const TableBody = styled.tbody`
  background-color: #f2f2f2;
  border: 2px solid black;
`;

export const TableHeadCell = styled.th`
  padding: 10px;
  text-align: center;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: center;
`;
