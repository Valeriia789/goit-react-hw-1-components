import PropTypes from 'prop-types'

export const StatsInfo = ({ statInfo }) => {
  return (
    <>
      {statInfo.map(stat => (
        <li key={stat.id}>
          <span>{stat.label}</span>
          <span>{stat.percentage}%</span>
        </li>
      ))}
    </>
  )
}

// StatsInfo.propTypes = {
//   statInfo: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired
//   })
// }
