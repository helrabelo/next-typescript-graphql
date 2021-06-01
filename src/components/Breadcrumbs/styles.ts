import styled, { css } from 'styled-components'

export const BreadcrumbsWarpper = styled.div`
  ${({ theme }) => css`
    nav {
      margin-bottom: 40px;

      ol {
        display: flex;
        list-style: none;

        li {
          display: flex;
          align-items: center;

          a {
            text-decoration: none;
            color: ${theme.colors.neutral.neutral400};
            font-weight: bold;
            text-transform: capitalize;
            font-size: 12px;
          }

          &:not(:last-child) {
            margin-right: 8px;
            &:after {
              content: '';
              display: block;
              border: solid ${theme.colors.neutral.neutral400};
              border-width: 0 2px 2px 0;
              display: inline-block;
              padding: 3px;
              transform: rotate(-45deg);
              -webkit-transform: rotate(-45deg);
              margin-left: 4px;
            }
          }
        }
      }
    }
  `}
`
