import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from 'components/Button'
import TextField from 'components/TextField'

import { emailRegexp, passwordRegexp, validateValue } from 'utils/regexps'

import * as S from './styles'

const LoginForm = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const setValue = (input: string) => (value: string) => {
    setSignUpForm({ ...signUpForm, [input]: value })
  }

  const [validForm, setValidForm] = useState(false)

  useEffect(
    () =>
      setValidForm(
        validateValue(emailRegexp, signUpForm.email) &&
          validateValue(passwordRegexp, signUpForm.password) &&
          signUpForm.password === signUpForm.confirmPassword
      ),
    [signUpForm]
  )

  return (
    <S.FormWrapper>
      <form>
        <S.LogInTitle>Sign up</S.LogInTitle>
        <TextField
          placeholder="Your email"
          onInput={setValue('email')}
          error={
            signUpForm.email !== '' &&
            !validateValue(emailRegexp, signUpForm.email)
          }
        />
        <TextField
          type="password"
          placeholder="Your password"
          onInput={setValue('password')}
          error={
            signUpForm.password !== '' &&
            !validateValue(passwordRegexp, signUpForm.password)
          }
        />
        <TextField
          type="password"
          placeholder="Repeat your password"
          onInput={setValue('confirmPassword')}
          error={
            signUpForm.confirmPassword !== '' &&
            signUpForm.password !== signUpForm.confirmPassword
          }
        />

        <S.TermsAndConditionsSpan>
          By signing up you agree with our
          <Link href="/sign-up">terms and conditions</Link>.
        </S.TermsAndConditionsSpan>
        <Button disabled={!validForm}>SignUp</Button>
        <S.LoginSpan>
          Don&apos;t have an account? <Link href="/sign-up">Sign up</Link> now
        </S.LoginSpan>
      </form>
    </S.FormWrapper>
  )
}

export default LoginForm
