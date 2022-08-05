import styled from '@emotion/styled'

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`

export const RowItem = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`
