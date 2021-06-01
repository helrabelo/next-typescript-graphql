import Base from 'templates/Base'

import { Divider } from 'components/Divider'
import SectionHeading from 'components/SectionHeading'
import { Container } from 'components/Container'
import SetsList, { SetsListProps } from 'components/SetsList'
import * as S from './styles'

export type SetsTemplateProps = {
  expansions: SetsListProps[]
}

const Sets = ({ expansions }: SetsTemplateProps) => (
  <Base>
    <S.SkewdBackgroundWrapper>
      <S.SkewedBackground />
    </S.SkewdBackgroundWrapper>
    <Container>
      <SectionHeading
        title="Sets"
        subtitle="All Pokémon sets. Placeholder text, gotta put some compy here eventually"
        filter
      />
    </Container>
    <Divider />
    <Container>
      {expansions.map((expansion) => (
        <SetsList
          key={expansion.name}
          name={expansion.name}
          cardSets={expansion.cardSets}
        />
      ))}
    </Container>
  </Base>
)

export default Sets
