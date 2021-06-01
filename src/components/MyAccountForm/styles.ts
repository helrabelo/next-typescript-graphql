import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as FormFields from 'components/TextField/styles'
import * as Button from 'components/Button/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border-radius: 8px;
    background-color: ${theme.colors.neutral.white};
    display: flex;
    flex-direction: column;
    padding: 32px;
    border: thin solid ${theme.colors.neutral.neutral200};

    ${media.lessThan('medium')`
      width: 100%;
      padding: 32px;
    `}

    ${Button.Wrapper} {
      display: block;
      align-self: flex-end;
      padding: 12px 52px;

      ${media.lessThan('medium')`
        margin-top: 12px;
      `}
    }
  `}
`

export const FormTitle = styled.h3`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 23px;
    line-height: 24px;
    color: ${theme.colors.neutral.neutral900};
    margin-bottom: 34px;

    ${media.lessThan('medium')`
      margin-bottom: 16px;
    `}
  `}
`

export const Row = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-bottom: 24px;
    width: 100%;

    ${media.lessThan('medium')`
      flex-direction: column;
      margin-bottom: 0;
    `}

    ${FormFields.Wrapper} {
      width: 100%;
      flex: 1;

      &:not(:last-child) {
        margin-right: 32px;
      }

      ${media.lessThan('medium')`
        margin-bottom: 12px;
      `}
    }

    ${FormFields.Label} {
      font-weight: 600;
      margin-left: 1.6rem;
    }

    ${FormFields.InputWrapper} {
      background: ${theme.colors.white};
      border: thin solid purple;
      flex: 1;
      width: 100%;
      margin-top: 8px;
      border: 1px solid black;
    }
  `}

  ${FormFields.Input} {
    padding-left: 0;
    padding: 10px 1.6rem 10px 0;
  }
`
