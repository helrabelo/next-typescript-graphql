import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { SearchProps } from './Search'

type IconPositionProps = Pick<SearchProps, 'iconPosition'>

type WrapperProps = Pick<SearchProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div`
  width: calc(100% - 30px);
  ${media.greaterThan('medium')`
    width: 390px;
  `}
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.neutral.neutral100};
    border-radius: 0.8rem;
    padding: 0 ${theme.spacings.xsmall};
    height: 3.6rem;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primaryColor.primary1000};
    }
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: ${iconPosition === 'right' ? `calc(100% - 2.2rem)` : `100%`};
    &[type='text'] {
      font-size: 16px;
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    color: ${theme.colors.neutral.neutral500};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 2.2rem;
      max-height: 24px;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }

    ${Icon},
    ${Label} {
      color: ${theme.colors.red};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    background-color: ${theme.colors.neutral.white};
    border-radius: ${theme.border.radius.small};
    box-shadow: ${theme.shadow.fluffy.elevation5};

    ${media.lessThan('medium')`
      padding: 10px 20px;
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
    `}

    ${media.greaterThan('medium')`
      padding: 10px;
      width: 440px;
      height: initial;
    `}

    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`

export const SearchTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ResultsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-top: 10px;

    ${media.greaterThan('medium')`
      padding: 0 10px;
    `}

    a {
      text-decoration: none;
      color: ${theme.colors.neutral.neutral700};
    }

    > span {
      color: ${theme.colors.neutral.neutral700};
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`
export const Result = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 5px;
    cursor: pointer;
    border-radius: 8px;

    ${media.greaterThan('medium')`
      padding: 10px;
    `}

    &:hover {
      background-color: ${theme.colors.neutral.neutral100};
    }

    > div {
      display: flex;
      -webkit-box-align: center;
      align-items: center;

      em {
        font-style: normal;
        background-color: ${theme.colors.neutral.neutral300};
      }
    }

    > div:first-of-type {
      img {
        max-height: 20px;
        width: auto;
        margin-right: 8px;
        max-width: 15px;
      }

      p {
        margin: 0px;
        color: rgb(34, 37, 49);
        font-weight: ${theme.font.bold};
        font-size: ${theme.font.sizes.small};
        line-height: 100%;

        ${media.greaterThan('medium')`
          font-weight: ${theme.font.normal};
          font-size: ${theme.font.sizes.medium};
        `}
      }

      span {
        color: rgb(128, 138, 157);
        font-size: 12px;
        font-weight: 500;
        padding: 2px;
        border-radius: 2px;
        margin-left: 5px;
        background: ${theme.colors.neutral.neutral200};
      }
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`
