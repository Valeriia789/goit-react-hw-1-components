import PropTypes from 'prop-types'
import { StatsList, StatsItem, Quantity } from './Stats.styled'

export const Stats = ({ stats: followers, views, likes }) => {
  console.log(followers, views, likes)

  return (
    <StatsList>
      <StatsItem>
        <span>Followers </span>
        <Quantity>{followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <span class='label'>Views </span>
        <Quantity>{views}</Quantity>
      </StatsItem>
      <StatsItem>
        <span class='label'>Likes </span>
        <Quantity>{likes}</Quantity>
      </StatsItem>
    </StatsList>
  )
}

Stats.propTypes = {
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
}
