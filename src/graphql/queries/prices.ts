import { gql } from '@apollo/client'

export const QUERY_PRICES = gql`
  query QueryPrices($card: ID!, $grade: Int, $limit: Int, $sort: String) {
    prices(where: { card: $card, grade: $grade }, limit: $limit, sort: $sort) {
      price
      grade
      date
    }
  }
`
