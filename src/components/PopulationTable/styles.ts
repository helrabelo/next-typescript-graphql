import styled, { css } from 'styled-components'

export const PopulationPSATable = styled.table`
  ${({ theme }) => css`
    width: 100%;
    tr {
      display: grid;
      grid-template-columns: 24px auto 48px;
      grid-gap: 8px;
      align-items: center;
      padding: 8px 12px;

      &:not(:last-child) {
        border-bottom: 1px solid ${theme.colors.neutral.neutral200};
      }
    }
  `}
`

type PopulationPSATableSpanProps = {
  blue?: boolean
  green?: boolean
  orange?: boolean
  pink?: boolean
  purple?: boolean
}

export const PopulationPSATableSpan = styled.span<PopulationPSATableSpanProps>`
  ${({ theme, blue, green, orange, pink, purple }) => css`
    width: 12px;
    height: 12px;
    display: block;
    border-radius: 100%;
    background: ${theme.gradients.blue};

    ${blue &&
    css`
      background: ${theme.gradients.blue};
      color: white;
    `};

    ${blue &&
    css`
      background: ${theme.gradients.blue};
      color: white;
    `};

    ${blue &&
    css`
      background: ${theme.gradients.blue};
      color: white;
    `};

    ${green &&
    css`
      background: ${theme.gradients.green};
      color: white;
    `};

    ${orange &&
    css`
      background: ${theme.gradients.orange};
      color: white;
    `};

    ${pink &&
    css`
      background: ${theme.gradients.pink};
      color: white;
    `};

    ${purple &&
    css`
      background: ${theme.gradients.purple};
      color: white;
    `};
  `}
`
export const PopulationPSATableValue = styled.p`
  ${({ theme }) => css`
    font-weight: bold;
    color: ${theme.colors.neutral.neutral500};
  `}
`
export const PopulationPSATablePopulation = styled.p`
  ${({ theme }) => css`
    font-weight: bold;
    color: ${theme.colors.black};
  `}
`
