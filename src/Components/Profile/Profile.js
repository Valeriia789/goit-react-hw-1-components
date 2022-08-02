import PropTypes from 'prop-types'
import { Stats } from './Stats'
import {
  Container,
  Description,
  Avatar,
  UserName,
  Line,
  UserTag,
  UserLocation
} from './Profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt='User avatar' />
        <UserName>{username}</UserName>
        <Line />
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>

        <Stats
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
      </Description>
    </Container>
  )
}

Profile.propTypes = {
  // user: PropTypes.exact ({ - прописуємо так, якщо 100% прийде те, що сказано
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.elementType.isRequired
  })
}
