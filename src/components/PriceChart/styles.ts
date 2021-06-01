import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const PriceWrapper = styled.div`
  ${({ theme }) => css`
    padding: 32px;
    padding-bottom: 12px;
    border-right: 1px solid ${theme.colors.neutral.neutral200};
    height: 100%;
    position: relative;

    ${media.lessThan('medium')`
      border: 1px solid ${theme.colors.neutral.neutral200};
      padding: 16px;
      width: 100%;
      border-radius: 8px;
      margin-bottom: 16px;
    `}
  `}
`

export const PriceInfoWrapper = styled.div`
  ${() => css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
      position: relative;
    `}
  `}
`

export const PriceNameAndPSAWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const PriceCardTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.neutral900};
    font-weight: 600;
    font-size: 23px;
    line-height: 24px;
  `}
`

type PricePSASelectWrapperProps = {
  blue?: boolean
  green?: boolean
  orange?: boolean
  pink?: boolean
  purple?: boolean
}

export const PricePSASelectWrapper = styled.div<PricePSASelectWrapperProps>`
  ${({ theme, blue, green, orange, pink, purple }) => css`
    position: relative;
    &:after {
      content: '';
      display: block;
      border: solid ${theme.colors.neutral.neutral400};
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      position: absolute;
      top: 6px;
      right: 10px;

      ${media.lessThan('medium')`
      top: 66px;
      left: 66px;
      `}

      ${blue &&
      css`
        border-color: ${theme.accentColors.blue};
        color: ${theme.accentColors.blue};
      `};

      ${green &&
      css`
        border-color: ${theme.accentColors.green};
        color: ${theme.accentColors.green};
      `};

      ${orange &&
      css`
        border-color: ${theme.accentColors.orange};
        color: ${theme.accentColors.orange};
      `};

      ${pink &&
      css`
        border-color: ${theme.accentColors.pink};
        color: ${theme.accentColors.pink};
      `};

      ${purple &&
      css`
        border-color: ${theme.accentColors.purple};
        color: ${theme.accentColors.purple};
      `};
    }
  `}
`

type PricePSASelectProps = {
  value: number
  blue?: boolean
  green?: boolean
  orange?: boolean
  pink?: boolean
  purple?: boolean
}

export const PricePSASelect = styled.select<PricePSASelectProps>`
  ${({ theme, blue, green, orange, pink, purple }) => css`
    -webkit-appearance: none;
    display: inline-block;
    margin-left: 16px;
    padding: 4px 12px;
    border-radius: 24px;
    box-sizing: content-box;
    font-weight: 600;
    min-width: 60px;
    max-height: 18px;

    &:focus {
      outline: none;
    }

    ${blue &&
    css`
      border-color: ${theme.accentColors.blue};
      color: ${theme.accentColors.blue};
    `};

    ${green &&
    css`
      border-color: ${theme.accentColors.green};
      color: ${theme.accentColors.green};
    `};

    ${orange &&
    css`
      border-color: ${theme.accentColors.orange};
      color: ${theme.accentColors.orange};
    `};

    ${pink &&
    css`
      border-color: ${theme.accentColors.pink};
      color: ${theme.accentColors.pink};
    `};

    ${purple &&
    css`
      border-color: ${theme.accentColors.purple};
      color: ${theme.accentColors.purple};
    `};

    ${media.lessThan('medium')`

      margin-top: 16px;
      max-width: none;
      margin-left: 0;
      align-self: flex-end;
      position: relative;


    `}
  `}
`
export const PricePSASelectOption = styled.option`
  ${({ theme }) => css`
    border: ${theme.accentColors.pink};
    color: ${theme.accentColors.pink};
  `}
`

export const PriceCardUpdateDetail = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.neutral600};
    font-size: 13px;
    line-height: 20px;
  `}
`
export const PriceChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
