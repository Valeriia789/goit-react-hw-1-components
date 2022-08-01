import user from './user.json'

import { Profile } from './Components/Profile/Profile'

export const App = () => {
  console.log(user.username, user.stats)

  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  )
}
