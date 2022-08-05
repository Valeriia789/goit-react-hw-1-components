import styled from '@emotion/styled'

export const ListItem = styled.li`
  margin: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px;

  background: ${props => props.theme.colors.accentDark};
  color: ${props => props.theme.colors.white};
  text-align: center;


  &:nth-of-type(3n + 2) {
    background: ${props => props.theme.colors.accentMedium};
  }
  &:nth-of-type(3n + 3) {
    background: ${props => props.theme.colors.accent};
  }
`
