import Button from 'components/Button'
import TextField from 'components/TextField'
import * as S from './styles'

const MyAccountForm = () => {
  return (
    <S.Wrapper>
      <S.FormTitle>My Account</S.FormTitle>
      <S.Row>
        <TextField label="Name" placeholder="Your name" initialValue="" />
        <TextField label="Email" placeholder="Your email" initialValue="" />
      </S.Row>
      <S.Row>
        <TextField
          label="Password"
          placeholder="Old Password"
          initialValue=""
          type="password"
        />
        <TextField
          label="New Password"
          placeholder="New Password"
          initialValue=""
          type="password"
        />
      </S.Row>
      <Button size="medium">Save</Button>
    </S.Wrapper>
  )
}

export default MyAccountForm
