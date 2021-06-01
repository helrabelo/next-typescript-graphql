import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
  hideFooter?: boolean
}

const Base = ({ children, hideFooter }: BaseTemplateProps) => (
  <S.Wrapper>
    <Menu />
    <S.Content>{children}</S.Content>

    <S.SectionFooter>
      <Container>{hideFooter || <Footer />}</Container>
    </S.SectionFooter>
  </S.Wrapper>
)

export default Base
