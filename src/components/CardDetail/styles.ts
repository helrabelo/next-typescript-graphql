import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid ${theme.colors.neutral.neutral200};
    border-radius: 8px;
    max-height: 620px;
    background: ${theme.colors.neutral.white};

    ${media.lessThan('medium')`
      max-height: unset;
      margin-bottom: 16px;
    `}
  `}
`

export const ImageWrapper = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 386px;
    width: 100%;
    position: relative;

    img {
      display: block;
      max-height: 100%;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
    }

    ${media.lessThan('medium')`
      align-items: flex-start;
      justify-content: center;
      box-sizing: border-box;
      height: unset;
        img {
          width: 100%;
          height: unset;
          max-height: unset;
          border-top-right-radius: 8px;
          border-top-left-radius: 8px;
        }
    `}
  `}
`

export const CardDetails = styled.div`
  display: flex;
  align-items: center;
`

export const CardDetailsList = styled.ul`
  padding: 24px;
  width: 100%;
`

export const CardDetailItem = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 36px auto 60px;
  grid-gap: 8px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

type CardDetailItemProps = {
  blue?: boolean
  green?: boolean
  orange?: boolean
  pink?: boolean
  purple?: boolean
}

export const IconWrapper = styled.div<CardDetailItemProps>`
  ${({ theme, blue, green, orange, pink, purple }) => css`
    cursor: pointer;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
      display: block;

      ${blue &&
      css`
        fill: ${theme.accentColors.blue};
        color: white;
      `};

      ${blue &&
      css`
        fill: ${theme.accentColors.blue};
        color: white;
      `};

      ${blue &&
      css`
        fill: ${theme.accentColors.blue};
        color: white;
      `};

      ${green &&
      css`
        fill: ${theme.accentColors.green};
        color: white;
      `};

      ${orange &&
      css`
        fill: ${theme.accentColors.orange};
        color: white;
      `};

      ${pink &&
      css`
        fill: ${theme.accentColors.pink};
        color: white;
      `};

      ${purple &&
      css`
        fill: ${theme.accentColors.purple};
        color: white;
      `};
    }
  `}
`

export const CardDetailLabel = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.neutral400};
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  `}
`

export const CardDetailValue = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.neutral900};
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  `}
`
