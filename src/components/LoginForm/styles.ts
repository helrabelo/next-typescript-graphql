import styled, { css } from 'styled-components'
// import media from 'styled-media-query'

import * as ButtonStyles from 'components/Button/styles'
import * as TextFieldStyles from 'components/TextField/styles'

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.neutral.white};
    border: 1px solid ${theme.colors.neutral.neutral200};
    padding: 60px 45px 30px;
    max-width: 400px;
    margin: 0 auto 30px;
    box-shadow: ${theme.shadow.fluffy.elevation5};
    border-radius: 8px;
    position: relative;

    &::before {
      content: '';
      display: block;
      width: 150px;
      height: 176px;
      position: absolute;
      top: -90px;
      right: -90px;
      background: url(${require('../../../public/img/login-form-logo-before.png')});
      background-size: contain;
      background-repeat: no-repeat;
      z-index: -1;
    }

    &::after {
      content: '';
      display: block;
      width: 140px;
      height: 266px;
      position: absolute;
      bottom: -180px;
      left: -80px;
      background: url(${require('../../../public/img/login-form-logo-after.png')});
      background-size: contain;
      background-repeat: no-repeat;
      z-index: -1;
    }

    ${ButtonStyles.Wrapper} {
      display: block;
      margin: 0 auto;
      margin-bottom: 40px;
    }

    ${TextFieldStyles.Wrapper} {
      margin-bottom: 10px;
      &:first-of-type {
        margin-bottom: 20px;
      }
    }

    ${TextFieldStyles.InputWrapper} {
      border: 1px solid ${theme.colors.neutral.neutral500};
      background: ${theme.colors.neutral.white};
    }

    ${TextFieldStyles.Input} {
      padding: 12px 0px;
    }
  `}
`

export const LogInTitle = styled.h3`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 32px;
    line-height: 36px;
    text-align: center;
    margin-bottom: 40px;
    color: ${theme.colors.neutral.neutral900};
  `}
`

export const CheckboxForgotPasswordWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
  margin-bottom: 30px;
`

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const RememberMeCheckbox = styled.input`
  margin-right: 12px;
`

export const RememberMeLabel = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.black};
    font-weight: ${theme.font.bold};
    font-size: 13px;
    line-height: 20px;
    margin-left: 12px;
  `}
`

export const ForgotPasswordLink = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    > a {
      font-size: 13px;
      line-height: 20px;
      text-decoration: none;
      color: ${theme.colors.neutral.neutral900};
    }
  `}
`

export const SignUpSpan = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    margin: 0 auto;
    color: ${theme.colors.neutral.neutral900};

    > a {
      color: ${theme.colors.primary};
      font-family: ${theme.font.family};
      text-decoration: none;
    }
  `}
`
