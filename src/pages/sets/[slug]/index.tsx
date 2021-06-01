import { initializeApollo } from 'utils/apollo'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import Cards, { CardsTemplateProps } from 'templates/Cards'

import { GET_CARDS_TABLE } from 'graphql/queries/cards'

import {
  GetCardsTable,
  GetCardsTableVariables
} from 'graphql/generated/GetCardsTable'
import { QueryExpansion } from 'graphql/generated/QueryExpansion'
import { QUERY_SETS } from 'graphql/queries/sets'

export default function Index(props: CardsTemplateProps) {
  const router = useRouter()

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return <Cards {...props} />
}

export async function getStaticPaths() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryExpansion>({
    query: QUERY_SETS
  })

  const paths: { params: { slug: string } }[] = []

  data.expansions.forEach((expansion) =>
    expansion.card_sets.forEach((cardSet) =>
      paths.push({
        params: { slug: cardSet.slug }
      })
    )
  )

  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths,
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<
    GetCardsTable,
    GetCardsTableVariables
  >({
    query: GET_CARDS_TABLE,
    variables: { setSlug: `${params?.slug}` }
  })

  return {
    props: {
      revalidate: 6000 * 24,
      setName: data.getCardsTable[0].setName,
      setDescription: 'This is a super set',
      cards: data.getCardsTable.map((card) => ({
        ...card,
        psa10: {
          ...card.psa10,
          price: card?.psa10?.price ? card.psa10.price : 0,
          lastSale: card?.psa10?.lastSale ? parseInt(card?.psa10?.lastSale) : 0
        },
        psa9: {
          ...card.psa9,
          price: card?.psa9?.price ? card.psa9.price : 0,
          lastSale: card?.psa9?.lastSale ? parseInt(card?.psa9?.lastSale) : 0
        }
      }))
    }
  }
}
