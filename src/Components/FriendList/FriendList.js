import { FriendListItem } from './FriendListItem'
import {List} from './FriendList.styled'

export const FriendList = ({friends}) => {
  return (
    <List>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          name={friend.name}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
        />
      ))}
    </List>
  )
}
