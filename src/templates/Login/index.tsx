import { Container } from 'components/Container'

import * as S from './styles'

type LoginProps = {
  children: React.ReactNode
}

const Login = ({ children }: LoginProps) => {
  return (
    <S.Wrapper>
      <Container>{children}</Container>
    </S.Wrapper>
  )
}

export default Login
