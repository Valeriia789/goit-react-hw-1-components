import styled from '@emotion/styled'

// const statusColor = friends => {
//   switch (friends.isOnline) {
//     case true:
//       return 'green';
//     case false:
//       return 'red';
//     default:
//       return 'grey';
//   }
// }

const statusColor = isOnline => {
  console.log(isOnline)
  return isOnline === true ? 'green' : 'red'
}

export const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
`

export const Status = styled.span`
  border-radius: 50%;
  background: ${statusColor};
`
