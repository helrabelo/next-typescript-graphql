import * as S from './styles'
import MyAccountMenuItem from 'components/MyAccountMenuItem'

import { CollectionFill as CollectionFillIcon } from '@styled-icons/bootstrap/CollectionFill'
import { TrendingUp as TrendingUpIcon } from '@styled-icons/boxicons-regular/TrendingUp'
import { User as UserIcon } from '@styled-icons/boxicons-solid/User'
import { LogOut as LogOutIcon } from '@styled-icons/boxicons-regular/LogOut'

const MyAccountMenu = () => {
  return (
    <S.Wrapper>
      <MyAccountMenuItem
        icon={<CollectionFillIcon />}
        title="My Cards"
        disabled
        disabledMessage="Coming Soon"
      />
      <MyAccountMenuItem icon={<TrendingUpIcon />} title="Portfolio" />
      <MyAccountMenuItem active icon={<UserIcon />} title="My Account" />
      <MyAccountMenuItem icon={<LogOutIcon />} title="My Account" />
    </S.Wrapper>
  )
}

export default MyAccountMenu
