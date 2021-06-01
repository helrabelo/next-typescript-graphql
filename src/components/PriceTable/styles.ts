import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SummaryWrapper = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.neutral.neutral200};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;

    ${media.lessThan('medium')`
      margin-bottom: 16px;
      border-top: none;
    `}
  `}
`

export const SummaryTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.neutral900};
    font-weight: 600;
    font-size: 23px;
    line-height: 24px;
  `}
`

export const SummaryDetail = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.neutral600};
    font-size: 13px;
    line-height: 20px;
  `}
`

export const HistoryTableWrapper = styled.div`
  ${() => css`
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100px;
      bottom: 0;
      background: -webkit-linear-gradient(transparent, #fcfcfc) left repeat;
      background: linear-gradient(transparent, #fcfcfc) left repeat;
    }
  `}
`

export const HistoryTable = styled.table`
  ${({ theme }) => css`
    tr {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 60px 3fr 4fr;
      grid-gap: 8px;
      font-size: 11px;
      line-height: 16px;
      margin-bottom: 8px;
      align-items: center;
      color: ${theme.colors.white};
    }
    ${media.lessThan('medium')`
        width: 100%;
        tr {
          grid-template-columns: 1fr 120px 2fr 2fr;
        }
      `}
  `}
`

export const HistoryTableTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`

export const HistoryTableTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 13px;
    line-height: 20px;
  `}
`

export const HistoryTableViewAllButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.accentColors.green};
    font-size: 9px;
    line-height: 12px;
    background: none;
    border: none;
    cursor: pointer;
  `}
`

type HistoryTablePSASpanProps = {
  blue?: boolean
  green?: boolean
  orange?: boolean
  pink?: boolean
  purple?: boolean
}

export const HistoryTablePSA = styled.span<HistoryTablePSASpanProps>`
  ${({ theme, blue, green, orange, pink, purple }) => css`
  width: 16px;
  height: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.gradients.pink}
  color: ${theme.colors.white}
  text-align: center;
  border-radius: 100%;

  ${
    blue &&
    css`
      background: ${theme.gradients.blue};
    `
  };

  ${
    green &&
    css`
      background: ${theme.gradients.green};
    `
  };

  ${
    orange &&
    css`
      background: ${theme.gradients.orange};
    `
  };

  ${
    pink &&
    css`
      background: ${theme.gradients.pink};
    `
  };

  ${
    purple &&
    css`
      background: ${theme.gradients.purple};
    `
  };
`}
`

export const HistoryTablePrice = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};
  `}
`

type HistoryTableVariationProps = {
  positive?: boolean
  negative?: boolean
}

export const HistoryTableVariation = styled.span<HistoryTableVariationProps>`
  ${({ theme, positive, negative }) => css`
    color: ${theme.colors.neutral.neutral600};
    text-align: right;

    ${positive &&
    css`
      color: ${theme.colors.success};
    `};

    ${negative &&
    css`
      color: ${theme.colors.error};
    `};
  `}
`

export const HistoryTableDate = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.neutral400};
    text-align: right;
  `}
`
