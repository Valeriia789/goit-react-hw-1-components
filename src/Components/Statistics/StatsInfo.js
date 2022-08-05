import PropTypes from 'prop-types'
import {ListItem} from './StatsInfo.styled'

export const StatsInfo = ({ statInfo }) => {
  return (
    <>
      {statInfo.map(stat => (
        <ListItem key={stat.id}>
          <p>{stat.label}</p>
          <span>{stat.percentage}%</span>
        </ListItem>
      ))}
    </>
  )
}

StatsInfo.propTypes = {
  statInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    }).isRequired
  )
}
