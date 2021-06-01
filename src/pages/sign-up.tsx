import Base from 'templates/Base'
import Login from 'templates/Login'
import SignUpForm from 'components/SignUpForm'

export default function LoginPage() {
  return (
    <Base hideFooter>
      <Login>
        <SignUpForm />
      </Login>
    </Base>
  )
}
