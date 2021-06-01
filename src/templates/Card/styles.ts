import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const TemporaryBreadCrumbWrapper = styled.div`
  margin-bottom: 20px;
  max-width: 1200px;
  margin: 0 auto;
`

// CARD DETAIL STYLES
export const CardWrapper = styled.div`
  ${() => css`
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 280px 900px;
    grid-gap: 16px;
    justify-items: center;
    position: relative;

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
    `}
  `}
`

// CHARTS

export const ChartsSectionWrapper = styled.div`
  width: 100%;
`

// CARD PRICE HISTORY FILES

export const MarketChartWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 650px 1fr;
    grid-gap: 0;
    align-items: start;
    border: 1px solid ${theme.colors.neutral.neutral200};
    border-radius: 8px;
    margin-bottom: 16px;
    background: ${theme.colors.neutral.white};

    ${media.lessThan('medium')`
      border: none;
      display: flex;
      flex-direction: column;
      max-width: 342px;
      margin: 0 auto;
      margin-bottom: 16px;
    `}
  `}
`

export const HistoryWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${media.lessThan('medium')`
      width: 100%;
      border: 1px solid ${theme.colors.neutral.neutral200};
      border-radius: 8px;
    `}
  `}
`
