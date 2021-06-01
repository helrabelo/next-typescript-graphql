import Home from 'templates/Home'
import { initializeApollo } from 'utils/apollo'

export default function Index() {
  return <Home />
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time (gatsby)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)
export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  // retorno dos dados
  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    }
  }
}