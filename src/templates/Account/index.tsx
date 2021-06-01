import { Container } from 'components/Container'
import * as S from './styles'
import Breadcrumb from 'components/Breadcrumbs'
import MyAccountMenu from 'components/MyAccountMenu'
import MyAccountForm from 'components/MyAccountForm'

const Account = () => {
  return (
    <Container>
      <div>
        <Breadcrumb />
        <S.MyAccountWrapper>
          <MyAccountMenu />
          <MyAccountForm />
        </S.MyAccountWrapper>
      </div>
    </Container>
  )
}

export default Account
