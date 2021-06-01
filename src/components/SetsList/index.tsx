import SetCard, { SetCardProps } from 'components/SetCard'
import Heading from 'components/Heading'

import * as S from './styles'

export type SetsListProps = {
  name: string
  cardSets: SetCardProps[]
}

const SetsList = ({ name, cardSets }: SetsListProps) => (
  <S.Wrapper>
    <Heading>{name}</Heading>
    <S.SetsDivider />
    <S.SetsWrapper>
      {!!cardSets &&
        cardSets.map((game, index) => <SetCard key={index} {...game} />)}
    </S.SetsWrapper>
  </S.Wrapper>
)

export default SetsList
