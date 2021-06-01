import { useState } from 'react'
import { Container } from 'components/Container'
import Base from 'templates/Base'
import * as S from './styles'

import CardDetail, { CardDetailProps } from 'components/CardDetail'

import Breadcrumb from 'components/Breadcrumbs'
import PriceBlock from 'components/PriceBlock'
import PopulationBlock from 'components/PopulationBlock'

export type CardTemplateProps = {
  cardDetails: CardDetailProps
}

const Card = ({ cardDetails }: CardTemplateProps) => {
  const [priceTableFulllVisibility, setPriceTableFulllVisibility] = useState(
    true
  )

  const handlePriceTableFullClick = () => {
    setPriceTableFulllVisibility(!priceTableFulllVisibility)
  }

  return (
    <Base>
      <Container>
        <S.TemporaryBreadCrumbWrapper>
          <Breadcrumb />
          <button onClick={handlePriceTableFullClick}>Click me</button>
        </S.TemporaryBreadCrumbWrapper>
        <S.CardWrapper>
          <CardDetail {...cardDetails} />
          <S.ChartsSectionWrapper>
            <PriceBlock
              cardName={cardDetails.cardName}
              cardId={cardDetails.cardId}
              priceTableFulllVisibility={priceTableFulllVisibility}
              setPriceTableFulllVisibility={handlePriceTableFullClick}
            />
            {!priceTableFulllVisibility && (
              <PopulationBlock cardId={cardDetails.cardId} />
            )}
          </S.ChartsSectionWrapper>
        </S.CardWrapper>
      </Container>
    </Base>
  )
}

export default Card
