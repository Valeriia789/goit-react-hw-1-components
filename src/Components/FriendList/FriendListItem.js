import { Item, Status } from './FriendListItem.styled'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status>{isOnline}A</Status>
      <img src={avatar} alt='User avatar' width='48' />
      <p>{name}</p>
    </Item>
  )
}
