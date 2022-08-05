import styled from '@emotion/styled'

export const StatisticSection = styled.section`
  background: ${props => props.theme.colors.backgroundHover};
  border: ${props => props.theme.borders.dotted};
  border-color: ${props => props.theme.colors.accent};
`

export const StatisticList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: ${p => p.theme.space[3]}px;
  background: ${props => props.theme.colors.backgroundLight};
`
