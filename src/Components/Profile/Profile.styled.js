import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;

  margin-top: ${p => p.theme.space[7]}px;

  border-radius: ${props => props.theme.radii.md};
  box-shadow: ${props => props.theme.shadows.card};

  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/bg-blog-card.jpg);
  background-size: cover;

  &:hover {
    background-color: ${props => props.theme.colors.backgroundHover};
  }
`

export const Description = styled.div`
  cursor: pointer;
  text-align: center;
`

export const Avatar = styled.img`
  width: ${props => props.theme.sizes.l};
  margin-top: ${p => p.theme.space[4]}px;
  border-radius: ${props => props.theme.radii.round};
`

export const UserName = styled.p`
  margin-top: ${p => p.theme.space[4]}px;
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-family: ${props => props.theme.fonts.roboto};
  color: ${props => props.theme.colors.backgroundLight};

  letter-spacing: ${props => props.theme.letterSpacings.l};
  text-shadow: ${props => props.theme.shadows.text};
`

export const Line = styled.hr`
  width: ${props => props.theme.sizes.l};
  height: ${props => props.theme.sizes.xxs};

  border: ${props => props.theme.borders.normal};
  box-shadow: ${props => props.theme.shadows.box};
`

export const UserTag = styled.p`
  margin-top: ${p => p.theme.space[7]}px;
  color: ${props => props.theme.colors.backgroundLight};
  font-size: ${props => props.theme.fontSizes.m};
  letter-spacing: ${props => props.theme.letterSpacings.m};
`

export const UserLocation = styled.p`
  margin-top: ${p => p.theme.space[4]}px;

  font-family: ${props => props.theme.fonts.roboto};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  letter-spacing: ${props => props.theme.letterSpacings.l};

  color: ${props => props.theme.colors.backgroundLight};
  text-shadow: ${props => props.theme.shadows.text};
`
