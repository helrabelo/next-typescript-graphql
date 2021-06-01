import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export type PriceTableFullProps = {
  priceTableFulllVisibility: boolean
}

export const PriceTableFullWrapper = styled.div<PriceTableFullProps>`
  ${({ theme }) => css`
    flex-direction: column;
    flex: 1;
    background: ${theme.colors.white};
    border-radius: 8px;
    border: 1px solid ${theme.colors.neutral.neutral200};
    position: relative;
    width: 100%;
    max-width: 909px;
    height: 100%;
  `}
`
export const PriceTableFull = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    width: 100%;
    flex: 1;
    border-radius: 8px;
    position: absolute;
  `}
`

export const PriceTableInfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px;
    border-bottom: 1px solid ${theme.colors.neutral.neutral200};
  `}
`

export const PriceTableFullTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.neutral900};
    font-weight: 600;
    font-size: 23px;
    line-height: 24px;
    margin-bottom: 8px;
  `}
`
export const PriceTableFullUpdateDetail = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.neutral600};
    font-size: 13px;
    line-height: 20px;
  `}
`

export const PriceTableFullReturnButton = styled.button`
  ${({ theme }) => css`
    padding: 8px 12px;
    color: ${theme.colors.primary};
    cursor: pointer;
    border: none;
    background: none;
    transition: all ease-out 0.2s;
    &:hover {
      color: ${theme.colors.secondary};
    }
  `}
`

export const TableWrapper = styled.div`
  ${() => css`
    position: relative;
    flex-grow: 1;
    height: 100%;
    
    ${media.lessThan('medium')`
      overflow-x: scroll;
      max-width: 100%;
    `}}
  `}
`

export const Table = styled.table`
  ${() => css`
    width: 100%;

    thead,
    tbody > tr {
      display: grid;
      grid-template-columns:
        64px
        120px
        120px
        100px
        110px
        auto
        100px
        140px;
    }

    ${media.lessThan('medium')`
      overflow-x: scroll !important;
      max-width: 340px;
      display: block;

    `}
  `}
`

export const TableHead = styled.thead`
  ${() => css``}
`

export const TableHeadItem = styled.th`
  ${({ theme }) =>
    css`
      padding: 12px;
      border-bottom: 1px solid ${theme.colors.neutral.neutral200};
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    `}
`

export const TableBody = styled.tbody`
  ${() => css``}
`

export const TableBodyRow = styled.tr`
  display: flex;
  align-items: center;
`

export type TableBodyItemProps = {
  blue?: boolean
  green?: boolean
  orange?: boolean
  pink?: boolean
  purple?: boolean
  link?: boolean
  positive?: boolean
  negative?: boolean
  psa?: boolean
  bold?: boolean
}

export const TableBodyItem = styled.p<TableBodyItemProps>`
  ${({
    theme,
    blue,
    green,
    orange,
    pink,
    purple,
    link,
    positive,
    negative,
    psa,
    bold
  }) => css`
    padding: 12px;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: center;

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

    ${psa &&
    css`
      width: 16px;
      height: 16px;
      font-weight: 600;
      isplay: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.white};
      text-align: center;
      border-radius: 100%;
      margin: 0 auto;
    `}

    ${link &&
    css`
      text-decoration: underline;
      cursor: pointer;
    `}

    ${positive &&
    css`
      color: ${theme.colors.success};
    `};

    ${negative &&
    css`
      color: ${theme.colors.error};
    `};

    ${bold &&
    css`
      font-weight: 600;
    `}
  `}
`
export const HeadingSpan = styled.span`
  position: relative;

  svg {
    max-width: 23px;
    max-height: 33px;
    position: absolute;
    top: -1px;
    right: -20px;
  }
`
