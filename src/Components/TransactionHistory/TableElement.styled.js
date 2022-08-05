import styled from '@emotion/styled'

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background: ${props => props.theme.colors.backgroundLight};
  }
  &:hover {
    background: ${props => props.theme.colors.backgroundHover};
  }
`

export const RowItem = styled.td`
  padding: ${p => p.theme.space[3]}px;
  border: ${props => props.theme.borders.normal};
`
