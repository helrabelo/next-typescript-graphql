import Base from 'templates/Base'
import Login from 'templates/Login'
import LoginForm from 'components/LoginForm'

export default function LoginPage() {
  return (
    <Base hideFooter>
      <Login>
        <LoginForm />
      </Login>
    </Base>
  )
}
