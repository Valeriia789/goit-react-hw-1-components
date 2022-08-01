import styled from '@emotion/styled'

export const StatsList = styled.ul`
  list-style-type: none;
  position: absolute;
  bottom: 0px;
  left: 0;

  background-color: rgba(84, 104, 110, 0.4);
`

export const StatsItem = styled.li`
  font-weight: 900;
  letter-spacing: 2px;
  text-align: start;
  font-family: 'Roboto', sans-serif;
  color: #dce3e7;
`

export const Quantity = styled.span`
  color: white;
  text-shadow: 0 0 3px #0f0000, 0 0 5px #0000f0;
`

// Text-shadow on a white text:
// color: white;
// text-shadow: 2px 2px 4px #000000;

// Text-shadow with a red neon glow:
// text-shadow: 0 0 3px #FF0000;

// Text-shadow with a red and blue neon glow:
// text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
