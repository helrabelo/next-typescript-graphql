import { initializeApollo } from 'utils/apollo'
import { GetServerSideProps } from 'next'

import Card from 'templates/Card'
import { QUERY_CARD } from 'graphql/queries/card'
import { QueryCard, QueryCardVariables } from 'graphql/generated/QueryCard'
import { getImageUrl } from 'utils/getImageUrl'
import { CardTemplateProps } from 'templates/Card'

export default function Index(props: CardTemplateProps) {
  return <Card {...props} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryCard, QueryCardVariables>({
    query: QUERY_CARD,
    variables: { slug: `${params?.card}` }
  })

  return {
    props: {
      revalidate: 60,
      cardDetails: {
        cardName: data.cards[0].name,
        cardId: data.cards[0].id,
        image: getImageUrl(data.cards[0].image?.url || ''),
        set: data.cards[0].card_set?.name,
        setSlug: 'base-set',
        number: `${data.cards[0].number}/${data.cards[0].card_set?.cards_in_set}`,
        year: data.cards[0].card_set?.year,
        grade: 'dada',
        population: 'dada'
      }
    }
  }
}
