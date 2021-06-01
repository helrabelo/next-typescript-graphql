import { Instagram as InstagramIcon } from '@styled-icons/fa-brands/Instagram'
import { Dribbble as DribbbleIcon } from '@styled-icons/fa-brands/Dribbble'
import { Twitter as TwitterIcon } from '@styled-icons/fa-brands/Twitter'
import { Youtube as YoutubeIcon } from '@styled-icons/fa-brands/Youtube'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.Copyright>TCG Trends 2021 © All rights reserved.</S.Copyright>
    <S.SocialIcons>
      <S.IconWrapper>
        <InstagramIcon aria-label="Instagram" />
      </S.IconWrapper>

      <S.IconWrapper>
        <DribbbleIcon aria-label="Dribbble" />
      </S.IconWrapper>
      <S.IconWrapper>
        <TwitterIcon aria-label="Twitter" />
      </S.IconWrapper>
      <S.IconWrapper>
        <YoutubeIcon aria-label="Youtube" />
      </S.IconWrapper>
    </S.SocialIcons>
  </S.Wrapper>
)

export default Footer
