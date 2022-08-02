import styled from '@emotion/styled'

export const StatsList = styled.ul`
  list-style-type: none;

  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  padding: 0;
`

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding: 15px;
`

export const Label = styled.span`
  font-size: 14px;
  color: lightgrey;
  text-shadow: 0 0 3px #0f0000, 0 0 5px yellow;
`

export const Quantity = styled.span`
  font-size: 14px;
  color: white;
  text-shadow: 0 0 3px #0f0000, 0 0 5px yellow;
`

// Text-shadow on a white text:
// color: white;
// text-shadow: 2px 2px 4px #000000;

// Text-shadow with a red neon glow:
// text-shadow: 0 0 3px #FF0000;

// Text-shadow with a red and blue neon glow:
// text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;

// export const StatsContainer = styled.table`
//   width: 100%;
//   padding: 10px;
//   margin-top: 70px;
//   border-collapse: collapse;
// `

// export const StatsRow = styled.tr`
//   display: flex;
//   justify-content: space-evenly;
// `

// export const StatsIcon = styled.th`
// margin-right: 10px;
// `

// export const Label = styled.td`
//   margin-right: 20px;
//   font-size: 12px;
//   color: white;
//   text-shadow: 0 0 3px #0f0000, 0 0 5px yellow;
// `

// export const Quantity = styled.td`
//   font-size: 14px;
//   color: lightgrey;
//   text-shadow: 0 0 3px #0f0000, 0 0 5px yellow;
// `
