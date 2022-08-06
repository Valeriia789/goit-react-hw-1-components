import styled from '@emotion/styled'

export const StatisticSection = styled.section`
  margin-top: ${p => p.theme.space[7]}px;

  background: ${props => props.theme.colors.backgroundHover};
  box-shadow: ${props => props.theme.shadows.card};

  border: ${props => props.theme.borders.dotted};
  border-color: ${props => props.theme.colors.accent};
`

export const StatisticList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: ${p => p.theme.space[3]}px;
  background: ${props => props.theme.colors.backgroundLight};
`
