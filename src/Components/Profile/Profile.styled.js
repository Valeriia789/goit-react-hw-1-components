import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 350px;
  height: 500px;
  gap: 16px;
  /* position: absolute; */
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/bg-blog-card.jpg)
    no-repeat;
`

export const Description = styled.div`
  /* width: 100%; */
  text-align: center;
  background-color: rgba(84, 104, 110, 0.4);
`

export const Avatar = styled.img`
  margin-top: 10px;
  width: 200px;
  border-radius: 45%;
`

export const UserName = styled.p`
  margin-top: 10px;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 3px;
  font-family: 'Roboto', sans-serif;
  color: #dce3e7;
  text-shadow: 1px 1px 2px black;
`

export const Line = styled.hr`
  width: 100px;
  height: 3px;
  margin: 5px auto 0 auto;
  border: 0;
  box-shadow: 0 0 3px yellow, 0 0 5px yellow;
`

export const UserTag = styled.p`
  margin-top: 50px;
  color: whitesmoke;
  text-shadow: 0 0 3px yellow, 0 0 5px yellow;
  font-family: 'Droid Serif', serif;
  font-size: 20px;
  line-height: 18px;
`

export const UserLocation = styled.p`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 3px;
  color: #dce3e7;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0;
  text-shadow: 1px 1px 2px black;
`
