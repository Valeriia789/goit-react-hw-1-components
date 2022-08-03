import PropTypes from 'prop-types'
import { StatsInfo } from './StatsInfo'

export const Statistics = ({ title, stats }) => {
  console.log(stats)
  return (
    <section>
      <h2>{title}</h2>

      <ul>
        <StatsInfo statInfo={stats} />
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
}
