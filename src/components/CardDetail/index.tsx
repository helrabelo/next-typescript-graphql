import * as S from './styles'

import { Library as CardSetIcon } from '@styled-icons/boxicons-regular/Library'
import { ListUl as CardNumberIcon } from '@styled-icons/boxicons-regular/ListUl'
import { Calendar as CardYearIcon } from '@styled-icons/boxicons-regular/Calendar'
import { Grade as CardGradeIcon } from '@styled-icons/material/Grade'
import { GroupWork as CardPopulationIcon } from '@styled-icons/material/GroupWork'

export type CardDetailProps = {
  cardId: string
  image: string
  cardName: string
  set: string
  number: string
  year: string
  grade: string
  population: string
}

const CardDetail = ({
  image,
  cardName,
  set,
  number,
  year,
  grade,
  population
}: CardDetailProps) => {
  return (
    <S.Card>
      <S.ImageWrapper>
        <img src={image} alt={cardName} />
      </S.ImageWrapper>
      <S.CardDetailsList>
        <S.CardDetailItem>
          <S.IconWrapper purple>
            <CardSetIcon />
          </S.IconWrapper>
          <S.CardDetailLabel>Set</S.CardDetailLabel>
          <S.CardDetailValue>{set}</S.CardDetailValue>
        </S.CardDetailItem>
        <S.CardDetailItem>
          <S.IconWrapper pink>
            <CardNumberIcon />
          </S.IconWrapper>
          <S.CardDetailLabel>Number</S.CardDetailLabel>
          <S.CardDetailValue>{number}</S.CardDetailValue>
        </S.CardDetailItem>
        <S.CardDetailItem>
          <S.IconWrapper blue>
            <CardYearIcon />
          </S.IconWrapper>
          <S.CardDetailLabel>Year</S.CardDetailLabel>
          <S.CardDetailValue>{year}</S.CardDetailValue>
        </S.CardDetailItem>
        <S.CardDetailItem>
          <S.IconWrapper green>
            <CardGradeIcon />
          </S.IconWrapper>
          <S.CardDetailLabel>Grade</S.CardDetailLabel>
          <S.CardDetailValue>{grade}</S.CardDetailValue>
        </S.CardDetailItem>
        <S.CardDetailItem>
          <S.IconWrapper orange>
            <CardPopulationIcon />
          </S.IconWrapper>
          <S.CardDetailLabel>Population</S.CardDetailLabel>
          <S.CardDetailValue>{population}</S.CardDetailValue>
        </S.CardDetailItem>
      </S.CardDetailsList>
    </S.Card>
  )
}

export default CardDetail
