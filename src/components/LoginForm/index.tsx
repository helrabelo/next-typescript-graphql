import { useState, useEffect } from 'react'
import { emailRegexp, passwordRegexp, validateValue } from 'utils/regexps'
import Link from 'next/link'
import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'

const LoginForm = () => {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })

  const [validForm, setValidForm] = useState(false)

  const setValue = (input: string) => (value: string) => {
    setLoginForm({ ...loginForm, [input]: value })
  }

  useEffect(
    () =>
      setValidForm(
        validateValue(emailRegexp, loginForm.email) &&
          validateValue(passwordRegexp, loginForm.password)
      ),
    [loginForm]
  )

  return (
    <S.FormWrapper>
      <form>
        <S.LogInTitle>Log in</S.LogInTitle>
        <TextField
          placeholder="Your email"
          onInput={setValue('email')}
          error={
            loginForm.email !== '' &&
            !validateValue(emailRegexp, loginForm.email)
          }
        />
        <TextField
          type="password"
          placeholder="Your password"
          onInput={setValue('password')}
          error={
            loginForm.password !== '' &&
            !validateValue(passwordRegexp, loginForm.password)
          }
        />
        <S.CheckboxForgotPasswordWrapper>
          <S.CheckboxWrapper>
            <input type="checkbox" />
            <S.RememberMeLabel>Remember me</S.RememberMeLabel>
          </S.CheckboxWrapper>
          <S.ForgotPasswordLink>
            <Link href="/sign-up">Forgot password?</Link>
          </S.ForgotPasswordLink>
        </S.CheckboxForgotPasswordWrapper>
        <Button disabled={!validForm}>Log In</Button>
        <S.SignUpSpan>
          Don&apos;t have an account? <Link href="/sign-up">Sign up</Link> now
        </S.SignUpSpan>
      </form>
    </S.FormWrapper>
  )
}

export default LoginForm
