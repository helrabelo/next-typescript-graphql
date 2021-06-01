import { Container } from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'
import CardsTable, { Card } from '../../components/CardsTable'
import Base from '../Base'

export type CardsTemplateProps = {
  setName: string
  setDescription: string
  cards: Card[]
}

const Cards = ({ setName, setDescription, cards }: CardsTemplateProps) => (
  <Base>
    <Container>
      <SectionHeading title={setName} subtitle={setDescription} />
    </Container>
    <Container>
      <CardsTable cards={cards} />
    </Container>
    <Container>
      <h1>CTA</h1>
    </Container>
  </Base>
)

export default Cards
