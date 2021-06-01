import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import * as HighlightStyles from 'components/Highlight/styles'
import * as SearchField from 'components/SearchField/styles'

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: 0 calc(-${theme.grid.gutter} / 2) ${theme.spacings.large};

    ${media.greaterThan('medium')`
      margin-bottom: ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`

export const SectionNews = styled.div`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom: 0;
      padding-top: 14rem;
      padding-bottom: 10rem;
      background-color: ${theme.colors.lightBg};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

      ${HeadingStyles.Wrapper} {
        color: ${theme.colors.black};
      }
    `}
  `}
`

export const SectionUpcoming = styled.div`
  ${({ theme }) => css`
    ${HighlightStyles.Wrapper} {
      margin-top: calc(${theme.spacings.xlarge} * 2);
    }
    ${HeadingStyles.Wrapper} {
      color: ${theme.colors.black};
    }
  `}
`

// Landing styles start here

export const SectionMain = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    margin-top: 40px;
    z-index: ${theme.layers.base};
  `}
`

export const MainTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.black};
    font-size: 48px;
    line-height: 52px;
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 14px;
    ${media.lessThan('medium')`
      font-size: 28px;
      line-height: 36px;
    `}
  `}
`

export const MainSubtitle = styled.h3`
  ${({ theme }) => css`
    font-size: 24px;
    line-height: 28px;
    color: ${theme.colors.neutral.neutral500};
    max-width: 430px;
    font-weight: 400;
    margin: 0 auto;
    margin-bottom: 24px;

    ${media.lessThan('medium')`
      font-size: 18px;
      line-height: 24px;
    `}
  `}
`

export const MainLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor.primary1000};
    cursor: pointer;
    margin-bottom: 100px;
  `}
`

export const MainImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

// Repeatable Content
export type PreTitleProps = {
  blue?: boolean
  green?: boolean
  orange?: boolean
  pink?: boolean
  purple?: boolean
}

export const PreTitle = styled.h3<PreTitleProps>`
  ${({ theme, blue, green, orange, pink, purple }) => css`
    font-weight: 600;
    font-size: 21px;
    line-height: 24px;
    margin-bottom: 24px;

    ${blue &&
    css`
      background: ${theme.gradients.blue};
    `};

    ${green &&
    css`
      background: ${theme.gradients.green};
    `};

    ${orange &&
    css`
      background: ${theme.gradients.orange};
    `};

    ${pink &&
    css`
      background: ${theme.gradients.pink};
    `};

    ${purple &&
    css`
      background: ${theme.gradients.purple};
    `};

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    ${media.lessThan('medium')`
      font-size: 16px;
      line-height: 22px;
    `}
  `}
`

export type TitleProps = {
  white?: boolean
}

export const Title = styled.h2<TitleProps>`
  ${({ theme, white }) => css`
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    margin-bottom: 24px;
    color: ${theme.colors.neutral.black};

    ${white &&
    css`
      color: ${theme.colors.neutral.white};
    `};

    ${media.lessThan('medium')`
      font-size: 24px;
      line-height: 28px;
    `}
  `}
`
export type CopyProps = {
  white?: boolean
}

export const Copy = styled.p<CopyProps>`
  ${({ theme, white }) => css`
    font-weight: 200;
    font-size: 24px;
    line-height: 32px;
    color: ${theme.colors.neutral.neutral500};
    margin-bottom: 24px;
    white-space: nowrap;

    ${white &&
    css`
      color: ${theme.colors.neutral.neutral200};
    `};

    ${media.lessThan('medium')`
      font-size: 18px;
      line-height: 22px;
      white-space: normal;

      br {
        display: none;
      }
    `}
  `}
`

// Section Unique Insights

export const SectionInsights = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: ${theme.layers.base};
    margin: 80px 0;
    margin-bottom: 110px;
    padding: 0 20px;

    ${media.lessThan('medium')`
      flex-direction: column;
      padding: 0;
    `}
  `}
`

export const SectionInsightsContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    z-index: ${theme.layers.base};
    flex: 1;

    ${media.lessThan('medium')`
      margin-bottom: 40px;
      padding: 0;
    `}
  `}
`

export const ParallaxImageWrapper = styled.div`
  ${() => css`
    display: flex;
    flex: 1;
    min-width: 50%;
    min-height: 400px;
    align-items: center;
    justify-content: center;
    position: relative;
  `}
`

export type HomePageImageProps = {
  offsetValue: number
  parallaxDirection?: string
  source: string
  width: number
  height: number
  mobileWidth?: number
  mobileHeight?: number
  top?: string
  bottom?: string
  left?: string
  right?: string
  mobileTop?: string
  mobileBottom?: string
  mobileLeft?: string
  mobileRight?: string
}

export const ParallaxImage = styled.div<HomePageImageProps>`
  ${({
    offsetValue,
    parallaxDirection = 'vertical',
    source,
    width,
    height,
    mobileWidth,
    mobileHeight,
    top,
    bottom,
    left,
    right,
    mobileTop,
    mobileBottom,
    mobileLeft,
    mobileRight
  }) => css`
    background-image: url(${source});
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    width: ${width}px;
    height: ${height}px;
    position: absolute;

    ${top &&
    css`
      top: ${top}px;
      border-top: thick solid red;
    `}
    ${bottom &&
    css`
      bottom: ${bottom}px;
      border-bottom: thick solid green;
    `}
      ${left &&
    css`
      left: ${left}px;
      border-left: thick solid blue;
    `}
      ${right &&
    css`
      right: ${right}px;
      border-right: thick solid purple;
    `};

    ${media.greaterThan('medium')`
      transform: ${
        parallaxDirection == 'vertical'
          ? `translateY(-${offsetValue}px);`
          : `translateX(-${offsetValue}px);`
      }
    `}

    ${media.lessThan('medium')`
      ${
        mobileTop &&
        css`
          top: ${mobileTop}px;
          border-top: thick solid yellow;
        `
      }
      ${
        mobileBottom &&
        css`
          bottom: ${mobileBottom}px;
          border-bottom: thick solid darkblue;
        `
      }
      ${
        mobileLeft &&
        css`
          left: ${mobileLeft}px;
          border-left: thick solid cyan;
        `
      }
      ${
        mobileRight &&
        css`
          right: ${mobileRight}px;
          border-right: thick solid orange;
        `
      };

      ${
        mobileHeight &&
        css`
          height: ${mobileHeight}px;
        `
      };
      ${
        mobileWidth &&
        css`
          width: ${mobileWidth}px;
        `
      };
    `}
  `}
`

// Section For All Traders

export const SectionForAllTraders = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 80px 0;
    padding: 80px 0;
    padding-bottom: 0;
    margin-bottom: 0;
    z-index: ${theme.layers.base};
    background: ${theme.colors.neutral.neutral900};
    position: relative;

    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      opacity: 0.6;
      z-index: -1;
      background: ${theme.colors.primaryColor.primary500};
    }
  `}
`

export const SectionForAllTradersContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    z-index: ${theme.layers.base};
    width: 100%;
    padding: 0 20px;

    > * {
      flex: 1;
      width: 100%;
      padding-right: 16px;
    }

    ${media.lessThan('medium')`
      flex-direction: column;
      padding: 0;

      > div {
        &:first-child {
          margin-bottom: 40px;
        }
      }
    `}
  `}
`
export const SectionForAllTradersImageWrapper = styled.div`
  ${() => css`
    display: flex;
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: -120px;
    height: 600px;
    position: relative;

    > div {
      bottom: -70px;
    }

    ${media.lessThan('medium')`
      height: 200px;
      margin-top: -60px;
      > div {
        bottom: -80px;
      }
    `}
  `}
`

// Section Real Value

export const SectionRealValue = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: ${theme.layers.base};
    margin: 80px 0;
    margin-top: 160px;
    padding: 0 20px;

    ${media.lessThan('medium')`
      flex-direction: column;
      padding: 0;
    `}
  `}
`

export const SectionRealValueContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    z-index: ${theme.layers.base};
    flex: 1;
    padding-right: 15%;

    ${media.lessThan('medium')`
      margin-bottom: 40px;
      padding: 0;
    `}
  `}
`

export const SectionRealValueImageWrapper = styled.div`
  ${() => css`
    display: flex;
    flex: 1;
    min-width: 50%;
    align-items: center;
    justify-content: center;
    height: 450px;
    position: relative;

    ${media.lessThan('medium')`
      min-height: 100px;
      width: 100%;
    `}
  `}
`

// Section CTA

export const SectionCTAWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primaryColor.primary200};
    margin: 80px 0;
    margin-top: 120px;
    margin-bottom: 0;

    ${media.lessThan('medium')`
      margin-top: 0;
    `}
  `}
`

export const SectionCTA = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: ${theme.layers.base};
    padding-bottom: 40px;

    ${media.lessThan('medium')`
      flex-direction: column-reverse;
    `}

    ${media.greaterThan('large')`
      padding-bottom: 0;
    `}

    ${media.greaterThan('huge')`
      padding-bottom: 0;
    `}
  `}
`

export const SectionCTAContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    z-index: ${theme.layers.base};
    flex: 1;

    ${media.lessThan('medium')`
      flex-direction: column;
      text-align: right;
      margin-top: 40px;
      padding-right: 0;
    `}
  `}
`

export const SectionCTAImageWrapper = styled.div`
  ${() => css`
    display: flex;
    flex: 1;
    min-width: 50%;
    align-items: center;

    ${media.greaterThan('medium')`
      margin-top: -180px;
    `}

    img {
      max-width: 1001px;

      ${media.lessThan('medium')`
        width: 100%;
      `}
    }
  `}
`

export const SectionCTATitle = styled.h2`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 41px;
    line-height: 48px;
    color: ${theme.colors.neutral.neutral800};

    ${media.lessThan('medium')`
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 8px;
    `}
  `}
`

export const SectionCTASubTitle = styled.h3`
  ${({ theme }) => css`
    font-size: 26px;
    line-height: 32px;
    color: ${theme.colors.neutral.black};
    margin-bottom: 20px;

    ${media.lessThan('medium')`
      font-size: 20px;
      line-height: 22px;
    `}
  `}
`

export const SectionCTAFormWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    ${SearchField.InputWrapper} {
      background: ${theme.colors.white};
      margin-right: 8px;
      border: 1px solid black;
      width: 266px;

      > input {
        padding-left: 0;
        &::placeholder {
          color: ${theme.colors.neutral.black};
        }
      }

      ${media.lessThan('medium')`
        width: unset;
      `}
    }

    ${media.lessThan('medium')`
      justify-content: flex-end;
    `}
  `}
`

// Background
export const SkewdBackgroundWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 37%;
  overflow: visible;
  z-index: -1;
`

export const SkewedBackground = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  top: 200px;
  left: 0;
  transform-origin: 100% 0;
  transform: skewY(-14deg);
  ${({ theme }) => css`
    background: ${theme.gradients.blue};
  `}
  overflow: hidden;
  opacity: 0.2;
`
