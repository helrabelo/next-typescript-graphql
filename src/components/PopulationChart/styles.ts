import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const PopulationWrapper = styled.div`
  ${({ theme }) => css`
    padding: 32px;
    padding-bottom: 12px;
    border-right: 1px solid ${theme.colors.neutral.neutral200};
    height: 100%;

    ${media.lessThan('medium')`
      border: 1px solid ${theme.colors.neutral.neutral200};
      width: 100%;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
    `}
  `}
`

export const PopulationInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const PopulationCardTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.neutral900};
    font-weight: 600;
    font-size: 23px;
    line-height: 24px;
  `}
`

export const PopulationCardUpdateDetail = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.neutral600};
    font-size: 13px;
    line-height: 20px;
  `}
`
