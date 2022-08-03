import user from './user.json'
import dataStats from './data.json'

import { Profile } from './Components/Profile/Profile'
import { Statistics } from './Components/Statistics/Statistics'

export const App = () => {
  return (
    <>
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}

      <Statistics title='Upload stats' stats={dataStats} />
    </>
  )
}
