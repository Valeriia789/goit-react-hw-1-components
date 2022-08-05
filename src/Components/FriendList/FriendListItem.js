import { Item, Avatar, Name, Status } from './FriendListItem.styled'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status>{isOnline}</Status>
      <Avatar src={avatar} alt='User avatar' />
      <Name>{name}</Name>
    </Item>
  )
}
