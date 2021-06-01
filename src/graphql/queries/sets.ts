import { gql } from '@apollo/client'

export const QUERY_SETS = gql`
  query QueryExpansion {
    expansions {
      name
      card_sets {
        id
        name
        slug
        logo {
          url
        }
        cards_in_set
        year
      }
    }
  }
`
