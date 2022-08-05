import styled from '@emotion/styled'

export const Table = styled.table`
  border-collapse: collapse;
  width: ${props => props.theme.sizes.parentSize};
`

export const HeadItem = styled.th`
  padding: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

  border: ${props => props.theme.borders.normal};
  background: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};

  text-align: left;
`