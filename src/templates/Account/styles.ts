import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const MyAccountWrapper = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: 280px minmax(auto, 910px);
    grid-gap: 13px;
    justify-content: center;
    align-items: start;

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
    `}
  `}
`
