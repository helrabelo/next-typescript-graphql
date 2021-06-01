import { gql } from '@apollo/client'

export const QUERY_POPULATIONS = gql`
  query QueryPopulations($card: ID!, $limit: Int, $sort: String) {
    populations(where: { card: $card }, limit: $limit, sort: $sort) {
      PSA10
      PSA9
      PSA8
      PSA7
      PSA6
      PSA5
      PSA4
      PSA3
      PSA2
      PSA1
      date_checked
    }
  }
`
