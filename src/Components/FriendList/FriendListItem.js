import { Item, Status } from './FriendListItem.styled'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status>{isOnline}o</Status>
      <img src={avatar} alt='User avatar' width='48' />
      <p>{name}</p>
    </Item>
  )
}
