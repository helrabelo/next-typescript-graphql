import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const PopulationChartWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 650px 1fr;
    grid-gap: 0;
    align-items: start;
    border: 1px solid ${theme.colors.neutral.neutral200};
    border-radius: 8px;
    background: ${theme.colors.neutral.white};
    position: relative;

    ${media.lessThan('medium')`
      border: none;
      display: flex;
      flex-direction: column;
      max-width: 342px;
      margin: 0 auto;
    `}

    ${media.greaterThan('medium')`
      min-height: 360px;
    `}
  `}
`

export const PopulationPSATableWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    ${media.lessThan('medium')`
      width: 100%;
      border: 1px solid ${theme.colors.neutral.neutral200};
      border-radius: 8px;
    `}
  `}
`
