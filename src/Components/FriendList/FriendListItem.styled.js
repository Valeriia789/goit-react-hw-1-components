import styled from '@emotion/styled'

const statusColor = props => {
  if (props.children === true) {
    return 'green'
  } else {
    return 'red'
  }
}

export const Item = styled.li`
  width: 300px;
  height: 60px;
  background: #eee;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background: #ddd;
  }

  &:active {
    background: pink;
  }
`

export const Avatar = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 30px;
  border: 2px solid #aaa;
  object-fit: cover;
  margin-left: 5px;
  margin-right: 10px;
  background: white;
`

export const Name = styled.p`
  font-size: 18px;
`

export const Status = styled.span`
  display: flexbox;
  width: 15px;
  height: 15px;

  background-color: ${statusColor};
  color: transparent;
  border-radius: 50%;
`
