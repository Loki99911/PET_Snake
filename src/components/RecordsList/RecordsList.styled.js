import styled from 'styled-components';

export const Table = styled.table`
  display: inline-block;
  width: 100%;
  border-collapse: collapse;
  margin-left: 50px;
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
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
