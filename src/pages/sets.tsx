import { initializeApollo } from '../utils/apollo'
import Sets, { SetsTemplateProps } from 'templates/Sets'
import { QUERY_SETS } from '../graphql/queries/sets'
import { QueryExpansion } from '../graphql/generated/QueryExpansion'
import { getImageUrl } from '../utils/getImageUrl'

export default function SetsPage(props: SetsTemplateProps) {
  return <Sets {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryExpansion>({
    query: QUERY_SETS
  })

  return {
    props: {
      revalidate: 5,
      expansions: data.expansions.map((expansion) => ({
        name: expansion.name,
        cardSets: expansion.card_sets.map((cardSet) => ({
          slug: cardSet.slug,
          year: cardSet.year,
          name: cardSet.name,
          cardsInSet: cardSet.cards_in_set,
          image: cardSet.logo ? getImageUrl(cardSet.logo.url) : '/img/logo.svg'
        }))
      }))
    }
  }
}
