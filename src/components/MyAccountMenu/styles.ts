import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border-radius: 8px;
    background-color: ${theme.colors.neutral.white};
    display: flex;
    flex-direction: column;
    border: thin solid ${theme.colors.neutral.neutral200};
    max-height: 280px;
    justify-content: flex-start;
    align-itens: flex-start;

    ${media.lessThan('medium')`
      width: 100%;
    `}
  `}
`
