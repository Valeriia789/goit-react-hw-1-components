import styled from '@emotion/styled'

const statusColor = props => {
  if (props.children === true) {
    return 'green'
  } else {
    return 'red'
  }
}

export const Item = styled.li`
  display: flex;
  align-items: center;

  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;

  border-bottom: ${props => props.theme.borders.normal};
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.backgroundHover};
  }

  &:active {
    background: ${props => props.theme.colors.accent};
  }
`

export const Avatar = styled.img`
  object-fit: cover;

  width: ${props => props.theme.sizes.s};
  height: ${props => props.theme.sizes.s};

  margin-left: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[4]}px;

  border: ${props => props.theme.borders.medium};
  border-radius: ${props => props.theme.radii.round};

  background: ${props => props.theme.colors.white};
`

export const Name = styled.p`
  font-size: ${props => props.theme.fontSizes.m};
`

export const Status = styled.span`
  display: flexbox;
  width: ${props => props.theme.sizes.point};
  height: ${props => props.theme.sizes.point};

  background-color: ${statusColor};
  border-radius: ${props => props.theme.radii.round};
`
