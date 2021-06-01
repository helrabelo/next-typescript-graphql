import { gql } from '@apollo/client'

export const QUERY_CARDS = gql`
  query QueryCards($limit: Int!) {
    cards(limit: $limit) {
      name
      image {
        url
      }
    }
  }
`

export const GET_CARDS_TABLE = gql`
  query GetCardsTable($setSlug: String!) {
    getCardsTable(setSlug: $setSlug) {
      number
      slug
      cardImage
      cardName
      setName
      setSlug
      year
      psa10 {
        price
        change30d
        population
        lastSale
      }
      psa9 {
        price
        change30d
        population
        lastSale
      }
    }
  }
`
