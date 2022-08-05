import styled from '@emotion/styled'

export const ListItem = styled.li`
  font-size: 18px;
  background: #c0392b;

  text-align: center;
  padding: 5px;
  color: #fff;
  margin: 5px;

  &:nth-of-type(3n + 2) {
    background: #d35400;
  }
  &:nth-of-type(3n + 3) {
    background: #f39c12;
  }
`
