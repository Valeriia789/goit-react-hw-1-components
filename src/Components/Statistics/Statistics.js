import PropTypes from 'prop-types'
import { StatsInfo } from './StatsInfo'
import { StatisticSection, StatisticList } from './Statistics.styled'

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticSection>
      {title && <h2>{title}</h2>}
      {/* {title.length > 1 && <h2>{title}</h2>} */}

      <StatisticList>
        <StatsInfo statInfo={stats} />
      </StatisticList>
    </StatisticSection>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
}
