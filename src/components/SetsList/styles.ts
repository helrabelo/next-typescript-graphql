import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import * as HighlightStyles from 'components/Highlight/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper} {
      margin-bottom: 20px;
      color: ${theme.colors.black};
    }
    ,
    ${HighlightStyles.Wrapper}, ${HighlightStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }

    margin-bottom: calc(${theme.spacings.large} * 2);

    @media (max-width: 768px) {
      max-width: 300px;
      margin: 0 auto;

      ${HeadingStyles.Wrapper} {
        margin-bottom: 20px;
        color: ${theme.colors.black};
      }
    }
  `}
`

export const SetsDivider = styled.hr`
  ${({ theme }) => css`
    margin: 10px 0 20px;
    height: 0.1rem;
    background: ${theme.colors.neutral.neutral400};
    border: 0;
  `}
`

export const SetsWrapper = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 27px;

    @media (max-width: 960px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      > * {
        margin-bottom: 20px;
      }
    }
  `}
`
