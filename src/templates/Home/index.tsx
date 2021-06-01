import { useState, useEffect } from 'react'
import Base from 'templates/BaseHomePage'
import { Container } from 'components/Container'
import Button from 'components/Button'
import SearchField from 'components/SearchField'

import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

const Home = () => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Base>
      <S.SkewdBackgroundWrapper>
        <S.SkewedBackground />
      </S.SkewdBackgroundWrapper>
      <Container>
        <S.SectionMain>
          <S.MainTitle>
            The place to track <br />
            your trading card collection.
          </S.MainTitle>
          <S.MainSubtitle>
            Find the value of your cards, see what&apos;s hot and discover new
            trades - all in one place.
          </S.MainSubtitle>
          <Link href="/card" passHref>
            <S.MainLink>Start tracking your cards &#10141;</S.MainLink>
          </Link>
          <S.MainImageWrapper>
            <Image
              src="/img/home-main-section-image@2x.png"
              alt="Mock Price Chart"
              width={850}
              height={370}
            />
          </S.MainImageWrapper>
        </S.SectionMain>
        <S.SectionInsights>
          <S.SectionInsightsContent>
            <S.PreTitle pink>Unique insights</S.PreTitle>
            <S.Title>
              The most powerful trading
              <br /> card portfolio tracker.
            </S.Title>
            <S.Copy>
              Whether you&apos;re a serious trader or just love collecting,{' '}
              <br />
              we&apos;ve got you covered. Check out all the stats on every{' '}
              <br />
              card from pricing info to real-time market value and <br />
              everything in between.
            </S.Copy>
            <div>
              <Button size="small" as="a" href="/card">
                See the trends &#10141;
              </Button>
              <S.Copy>Value of offset: {offsetY}</S.Copy>
            </div>
          </S.SectionInsightsContent>
          <S.ParallaxImageWrapper>
            <S.ParallaxImage
              source={require('../../../public/img/home-unique-insights-card-1.png')}
              width={190}
              height={122}
              offsetValue={0.35 * offsetY}
              // offsetValue={offsetY > 720 ? 250 : 0.35 * offsetY}
              // parallaxDirection="horizontal"
              top={'350'}
              left={'0'}
              mobileTop={'0'}
              mobileLeft={'0'}
            />
            <S.ParallaxImage
              source={require('../../../public/img/home-unique-insights-card-2.png')}
              width={190}
              height={122}
              offsetValue={0.55 * offsetY}
              // offsetValue={offsetY > 720 ? 400 : 0.55 * offsetY}
              top={'400'}
              left={'200'}
              mobileTop={'150'}
              mobileLeft={'-100'}
            />
            <S.ParallaxImage
              source={require('../../../public/img/home-unique-insights-card-3.png')}
              width={190}
              height={122}
              offsetValue={0.28 * offsetY}
              // offsetValue={offsetY > 720 ? 200 : 0.28 * offsetY}
              bottom={'-200'}
              left={'250'}
              mobileBottom={'100'}
              mobileLeft={'80'}
            />
            <S.ParallaxImage
              source={require('../../../public/img/home-unique-insights-card-4.png')}
              width={190}
              height={122}
              offsetValue={0.7 * offsetY}
              // offsetValue={offsetY > 720 ? 500 : 0.7 * offsetY}
              bottom={'-350'}
              right={'50'}
              mobileBottom={'-30'}
              mobileRight={'0'}
            />
          </S.ParallaxImageWrapper>
        </S.SectionInsights>
      </Container>

      <S.SectionForAllTraders>
        <Container>
          <S.SectionForAllTradersContent>
            <div>
              <S.PreTitle blue>For All Traders</S.PreTitle>
              <S.Title white>See where the market is going.</S.Title>
              <S.Copy white>
                Use TCGTrends trade finder to search for potential trades based{' '}
                <br />
                on card value changes over time across different platforms like{' '}
                <br />
                eBay or TCGPlayer so you don&apos;t get ripped off by traders
                trying to
                <br />
                make a quick buck at your expense!
              </S.Copy>
              <div>
                <Button size="small" as="a" href="/card">
                  Get started now &#10141;
                </Button>
                <S.Copy>Value of offset: {offsetY}</S.Copy>
              </div>
            </div>
            <div>
              <S.Copy white>
                Not only will you be able to keep track of what&apos;s going on
                with <br />
                individual cards but as well as entire collections, and sets.
              </S.Copy>
            </div>
          </S.SectionForAllTradersContent>

          <S.SectionForAllTradersImageWrapper>
            <Image
              src="/img/home-for-all-traders-image-6.png"
              alt="Mock Price Chart"
              width={1278}
              height={478}
            />
            <S.ParallaxImage
              source={require('../../../public/img/home-for-all-traders-image-1.png')}
              width={353}
              height={493}
              offsetValue={0.47 * offsetY}
              // offsetValue={offsetY > 1600 ? 750 : 0.47 * offsetY}
              top={'1000'}
              left={'500'}
              mobileWidth={105}
              mobileHeight={147}
              mobileTop={'100'}
              mobileLeft={'150'}
            />
            <S.ParallaxImage
              source={require('../../../public/img/home-for-all-traders-image-2.png')}
              width={265}
              height={369}
              offsetValue={0.4 * offsetY}
              // offsetValue={offsetY > 1600 ? 650 : 0.4 * offsetY}
              top={'800'}
              right={'150'}
              mobileWidth={78}
              mobileHeight={123}
              mobileTop={'60'}
              mobileRight={'0'}
            />
            <S.ParallaxImage
              source={require('../../../public/img/home-for-all-traders-image-3.png')}
              width={209}
              height={292}
              offsetValue={0.38 * offsetY}
              // offsetValue={offsetY > 1600 ? 600 : 0.38 * offsetY}
              top={'1000'}
              left={'20'}
              mobileWidth={70}
              mobileHeight={97}
              mobileTop={'120'}
              mobileLeft={'0'}
            />
            <S.ParallaxImage
              source={require('../../../public/img/home-for-all-traders-image-4.png')}
              width={195}
              height={272}
              offsetValue={0.62 * offsetY}
              // offsetValue={offsetY > 1600 ? 1000 : 0.62 * offsetY}
              top={'1150'}
              left={'250'}
              mobileWidth={65}
              mobileHeight={90}
              mobileTop={'80'}
              mobileLeft={'75'}
            />
          </S.SectionForAllTradersImageWrapper>
        </Container>
      </S.SectionForAllTraders>
      <Container>
        <S.SectionRealValue>
          <S.SectionRealValueContent>
            <S.PreTitle purple>Real Value</S.PreTitle>
            <S.Title>Never miss an opportunity</S.Title>
            <S.Copy>
              We&apos;re more than just an inventory tracking tool. We also{' '}
              <br />
              help you track the value of your collection, discover <br />
              trends in card prices, and identify when it&apos;s best to sell or{' '}
              <br />
              trade certain cards.
            </S.Copy>
            <div>
              <Button size="small" as="a" href="/card">
                See the trends &#10141;
              </Button>
              <S.Copy>Value of offset: {offsetY}</S.Copy>
            </div>
          </S.SectionRealValueContent>
          <S.SectionRealValueImageWrapper>
            <S.ParallaxImage
              source={require('../../../public/img/home-real-value-section-image-1.png')}
              width={512}
              height={208}
              offsetValue={0.4 * offsetY}
              // offsetValue={offsetY > 2200 ? 900 : 0.4 * offsetY}
              top={'900'}
              left={'-100'}
              mobileWidth={230}
              mobileHeight={90}
              mobileTop={'-50'}
              mobileLeft={'40'}
            />
            <S.ParallaxImage
              source={require('../../../public/img/home-real-value-section-image-2.png')}
              width={431}
              height={170}
              offsetValue={0.58 * offsetY}
              // offsetValue={offsetY > 2200 ? 1300 : 0.58 * offsetY}
              top={'1600'}
              left={'-350'}
              mobileWidth={196}
              mobileHeight={76}
              mobileTop={'60'}
              mobileLeft={'0'}
            />
            <S.ParallaxImage
              source={require('../../../public/img/home-real-value-section-image-3.png')}
              width={232}
              height={516}
              offsetValue={0.5 * offsetY}
              // offsetValue={offsetY > 2200 ? 1100 : 0.5 * offsetY}
              top={'1300'}
              right={'150'}
              mobileWidth={105}
              mobileHeight={229}
              mobileTop={'0'}
              mobileRight={'20'}
            />
          </S.SectionRealValueImageWrapper>
        </S.SectionRealValue>
      </Container>
      <S.SectionCTAWrapper>
        <Container fullWidth>
          <S.SectionCTA>
            <S.SectionCTAImageWrapper>
              <img src="/img/home-cta-section-image@2x.png" alt="Cards" />
            </S.SectionCTAImageWrapper>
            <S.SectionCTAContent>
              <S.SectionCTATitle>See what&apos;s trending...</S.SectionCTATitle>
              <S.SectionCTASubTitle>
                ...before everyone else. Join our list.
              </S.SectionCTASubTitle>
              <S.SectionCTAFormWrapper>
                <SearchField
                  name="search"
                  placeholder="Your email address"
                  type="text"
                />
                <Button size="small" as="a" href="/card">
                  Join the waitlist
                </Button>
              </S.SectionCTAFormWrapper>
            </S.SectionCTAContent>
          </S.SectionCTA>
        </Container>
      </S.SectionCTAWrapper>
    </Base>
  )
}

export default Home
