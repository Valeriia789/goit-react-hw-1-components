import PropTypes from 'prop-types'
import { StatsList, StatsItem, Label, Quantity } from './Stats.styled'

export const Stats = ({ followers, views, likes }) => {
  return (
    <StatsList>
      <StatsItem>
        <span>&#128694;</span>
        <Label>Followers </Label>
        <Quantity>{followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <span>&#128064;</span>
        <Label>Views </Label>
        <Quantity>{views}</Quantity>
      </StatsItem>
      <StatsItem>
        <span>&#10084;</span>
        <Label>Likes </Label>
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

// import {
//   StatsContainer,
//   StatsRow,
//   StatsIcon,
//   Label,
//   Quantity
// } from './Stats.styled'

// export const Stats = ({ followers, views, likes }) => {
//   return (
//     <StatsContainer>
//       <StatsRow>
//         <StatsIcon>&#128694;</StatsIcon>
//         <StatsIcon>&#128064;</StatsIcon>
//         <StatsIcon>&#10084;</StatsIcon>
//       </StatsRow>
//       <StatsRow>
//         <Label>Followers</Label>
//         <Label>Views</Label>
//         <Label>Likes</Label>
//       </StatsRow>
//       <StatsRow>
//         <Quantity>{followers}</Quantity>
//         <Quantity>{views}</Quantity>
//         <Quantity>{likes}</Quantity>
//       </StatsRow>
//     </StatsContainer>
//   )
// }
