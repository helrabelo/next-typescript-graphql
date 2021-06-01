import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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
    position: relative;

    ${media.lessThan('medium')`
      border: none;
      display: flex;
      flex-direction: column;
      max-width: 342px;
      margin: 0 auto;
      margin-bottom: 16px;
    `}

    ${media.greaterThan('medium')`
      min-height: 360px;
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
