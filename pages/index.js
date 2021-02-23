import styled from 'styled-components'
import Image from 'next/image'

export default function Home() {
  return (
    <Body>
      <BgWrapper>
        <Image 
          layout="fill"
          objectFit="cover"
          quality={100}
          src="/teaser-bg.png"
        />
      </BgWrapper>
      <TeaserContainer>
        <Heading>
          道東の未来を灯すSDGsマガジン
        </Heading>
        <TitleLogo>
          <Image
          quality={100}
          width={460}
          height={82}
          src='/logo-wh.svg'
          />
        </TitleLogo>
        <SubTitle>トモス</SubTitle>
        <Description>
          サイト公開準備中！
        </Description>
      </TeaserContainer>
      <Copyright>&copy; Eastern Hokkaido SDGs</Copyright>
    </Body>
  );
}

const BgWrapper = styled.section`
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`;

const Body = styled.div`
`



const TeaserContainer = styled.div`
  margin: 0 auto;
  padding-top: 18%;
`

const Heading = styled.h2`
  color: white;
  font-size: 22px;
  letter-spacing: 8px;
  margin-bottom: 64px;
  font-weight: 300;
  text-align: center;
`

const TitleLogo = styled.h2`
  margin-bottom: 48px;
  text-align: center;
`

const SubTitle = styled.h1`
  color: white;
  font-size: 28px;
  letter-spacing: 16px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 88px;
`

const Description = styled.p`
  color: #DAE000;
  font-size: 30px;
  font-weight: 300;
  text-align: center;
`

const Copyright = styled.p`
  width: 100vw;
  color: white;
  text-align: center;
  font-weight: 300;
  letter-spacing: 2px;
  position: absolute;
  bottom: 5%;

`