import PropTypes from 'prop-types'
import { StatsContainer, StatsRow, StatsIcon, Label, Quantity } from './Stats.styled'

export const Stats = ({ followers, views, likes }) => {
  return (
    <StatsContainer>
      <StatsRow>
        <StatsIcon>👣</StatsIcon>
        <StatsIcon>👁</StatsIcon>
        <StatsIcon>❤</StatsIcon>
      </StatsRow>
      <StatsRow>
        <Label>Followers </Label>
        <Label>Views </Label>
        <Label>Likes </Label>
      </StatsRow>
      <StatsRow>
        <Quantity>{followers}</Quantity>
        <Quantity>{views}</Quantity>
        <Quantity>{likes}</Quantity>
      </StatsRow>
    </StatsContainer>
  )
}

Stats.propTypes = {
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
}


// import { StatsList, StatsItem, Quantity } from './Stats.styled'
// export const Stats = ({ followers, views, likes }) => {
//   return (
//     <StatsList>
//       <StatsItem>
//         <span>Followers </span>
//         <Quantity>{followers}</Quantity>
//       </StatsItem>
//       <StatsItem>
//         <span class='label'>Views </span>
//         <Quantity>{views}</Quantity>
//       </StatsItem>
//       <StatsItem>
//         <span class='label'>Likes </span>
//         <Quantity>{likes}</Quantity>
//       </StatsItem>
//     </StatsList>
//   )
// }
