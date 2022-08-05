import {TableRow, RowItem} from './TableElement.styled'

export const TableElement = ({ type, amount, currency }) => {
  return (
    <TableRow>
      <RowItem>{type}</RowItem>
      <RowItem>{amount}</RowItem>
      <RowItem>{currency}</RowItem>
    </TableRow>
  )
}
