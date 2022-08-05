import user from './user.json'
import dataStats from './data.json'
import friends from './friends.json'
import transactions from './transactions.json'

import { Profile } from './Components/Profile/Profile'
import { Statistics } from './Components/Statistics/Statistics'
import { FriendList } from './Components/FriendList/FriendList'
import { TransactionHistory } from './Components/TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title='Upload stats' stats={dataStats} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  )
}
