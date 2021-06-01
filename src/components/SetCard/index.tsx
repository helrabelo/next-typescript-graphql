import Link from 'next/link'
import Image from 'next/image'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import { usePalette } from 'react-palette'

import * as S from './styles'

export type SetCardProps = {
  slug: string
  year: string
  name: string
  cardsInSet: string
  image: string
  favorite?: boolean
  onFav?: () => void
}

const SetCard = ({
  slug,
  year,
  name,
  cardsInSet,
  image,
  favorite = false,
  onFav
}: SetCardProps) => {
  const { data } = usePalette(image)

  return (
    <S.Wrapper>
      <Link href={`/sets/${slug}`} passHref>
        <S.ImageBox
          style={{
            background: `linear-gradient(135deg, ${data.vibrant}33, ${data.muted}33)`
          }}
        >
          <S.ImageWrapper>
            <div>
              <Image
                role="image"
                src={image}
                alt={name}
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
          </S.ImageWrapper>
        </S.ImageBox>
      </Link>
      <S.Content>
        <Link href={`/sets/${slug}`} passHref>
          <S.Info>
            <S.ReleaseYear>{year}</S.ReleaseYear>
            <S.Title>{name}</S.Title>
            <S.CardsInSet>{cardsInSet} cards in set</S.CardsInSet>
          </S.Info>
        </Link>
      </S.Content>
      <S.FavButton onClick={onFav} role="button">
        {favorite ? (
          <Favorite aria-label="Remove from Favorites" />
        ) : (
          <FavoriteBorder aria-label="Add to Favorites" />
        )}
      </S.FavButton>
    </S.Wrapper>
  )
}

export default SetCard
