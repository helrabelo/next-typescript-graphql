import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const TableWrapper = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.neutral.neutral200};
    border-radius: ${theme.border.radius.big};
    ${theme.shadow.fluffy.elevation5};

    ${media.lessThan('medium')`
      overflow-x: scroll;
    `}

    table {
      font-size: ${theme.font.sizes.medium};
      background: ${theme.colors.neutral.white};
      border-radius: ${theme.border.radius.big};
    }

    tr {
      font-size: ${theme.font.sizes.medium};
      color: inherit;
      display: table-row;
      outline: 0;
      vertical-align: middle;
    }

    tbody tr {
      &:hover {
        background: ${theme.colors.neutral.neutral100};
      }
    }

    td,
    th {
      font-size: ${theme.font.sizes.small};
      font-family: ${theme.font.family};
      display: table-cell;
      padding: 16px;
      text-align: left;
      font-weight: 400;
      line-height: 1.43;
      border-bottom: 1px solid ${theme.colors.neutral.neutral200};
      letter-spacing: 0.01071em;
      vertical-align: inherit;
      ${media.lessThan('medium')`
        min-width: 108px;
      `}
    }

    th {
      text-align: center;
      font-weight: ${theme.font.bold};
      line-height: 1.5rem;
    }

    thead {
      tr:first-of-type {
        th:first-child {
          span {
            display: none;
          }

          ${media.lessThan('medium')`
            display: none;
          `}
        }

        th:nth-child(3),
        th:nth-child(4) {
          border-left: 1px solid ${theme.colors.neutral.neutral200};
        }
      }

      tr:nth-of-type(2) {
        ${media.lessThan('medium')`
          th:nth-child(1) {
            display: none;
          }

          th:nth-child(2) {
            position: sticky;
            left: 0px;
            background: white;
            border-right: 1px solid ${theme.colors.neutral.neutral200};
            z-index: 2;
          }
        `}
      }
    }

    th:nth-child(5),
    th:nth-child(9),
    td:nth-child(5),
    td:nth-child(9) {
      border-left: 1px solid ${theme.colors.neutral.neutral200};
    }

    tbody {
      td:nth-child(2) {
        max-width: 245px;
      }

      ${media.lessThan('medium')`
        td:nth-child(2) {
          position: sticky;
          left: 0px;
          background: white;
          border-right: 1px solid ${theme.colors.neutral.neutral200};
        }

        td:nth-child(1) {
          display: none;
        }
      `}
    }

    tbody {
      td:nth-child(5),
      td:nth-child(9) {
        font-weight: ${theme.font.bold};
      }
    }

    th:nth-child(5),
    th:nth-child(6),
    th:nth-child(7),
    th:nth-child(9),
    th:nth-child(10),
    th:nth-child(11),
    td:nth-child(5),
    td:nth-child(6),
    td:nth-child(7),
    td:nth-child(9),
    td:nth-child(10),
    td:nth-child(11) {
      text-align: right;
    }

    a {
      color: ${theme.colors.neutral.neutral800};
      text-decoration: none;
    }
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
    font-weight: ${theme.font.bold};

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
