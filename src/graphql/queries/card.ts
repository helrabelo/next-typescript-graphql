import { gql } from '@apollo/client'

export const QUERY_CARD = gql`
  query QueryCard($slug: String!) {
    cards(where: { slug: $slug }) {
      id
      name
      number
      image {
        url
      }
      card_set {
        name
        cards_in_set
        year
      }
    }
  }
`
