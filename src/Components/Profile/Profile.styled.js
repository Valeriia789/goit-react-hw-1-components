import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 500px;
  gap: 16px;
  position: absolute;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/bg-blog-card.jpg)
    no-repeat;
`

export const Description = styled.div`
  text-align: center;
`

export const Avatar = styled.img`
  width: 150px;
`

export const UserName = styled.p`
  background-color: red;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  /* color: #9CC9E3; */
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0;
`

export const Line = styled.hr`
  width: 70px;
  height: 3px;
  margin: 20px auto;
  border: 0;

  box-shadow: 0 0 3px #0f0000, 0 0 5px #0000f0;
`

export const UserTag = styled.p`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  text-shadow: 0 0 3px #0f0000, 0 0 5px #0000f0;
  font-family: 'Droid Serif', serif;
  font-size: 20px;
  font-style: italic;
  line-height: 18px;
  background-color: rgba(84, 104, 110, 0.4);
`

export const UserLocation = styled.p`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 3px;
  font-style: italic;
  color: #dce3e7;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 0;
  background-color: rgba(84, 104, 110, 0.4);
`
