import styled from '@emotion/styled'

export const List = styled.ul`
  display: block;

  width: ${props => props.theme.sizes.parentSize};
  height: ${props => props.theme.sizes.parentSize};

  margin-top: ${p => p.theme.space[7]}px;

  background: ${props => props.theme.colors.backgroundLight};
  box-shadow: ${props => props.theme.shadows.card};
`
