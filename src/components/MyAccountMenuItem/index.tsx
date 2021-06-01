import * as S from './styles'

type MenuItem = {
  icon: React.ReactNode
  title: string
  active?: boolean
  disabled?: boolean
  disabledMessage?: string
}

const MyAccountMenuItem = ({
  icon,
  title,
  active,
  disabled,
  disabledMessage
}: MenuItem) => {
  console.log(icon)
  return (
    <S.Wrapper active={active} disabled={disabled}>
      <S.Icon>{icon}</S.Icon>
      <S.ItemTitle active={active} disabled={disabled}>
        {title}
      </S.ItemTitle>
      {disabledMessage && (
        <S.DisableMessageWrapper>
          <S.DisabledMessage>{disabledMessage}</S.DisabledMessage>
        </S.DisableMessageWrapper>
      )}
    </S.Wrapper>
  )
}

export default MyAccountMenuItem
