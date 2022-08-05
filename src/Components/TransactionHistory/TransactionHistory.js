import { TableElement } from './TableElement'
import { Table, HeadItem } from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <HeadItem>Type</HeadItem>
          <HeadItem>Amount</HeadItem>
          <HeadItem>Currency</HeadItem>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TableElement
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </Table>
  )
}
