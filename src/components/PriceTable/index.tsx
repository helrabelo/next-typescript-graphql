import { useContext, useState } from 'react'
import { useQuery } from '@apollo/client'
import {
  QueryPrices,
  QueryPricesVariables
} from '../../graphql/generated/QueryPrices'
import { QUERY_PRICES } from '../../graphql/queries/prices'
import * as S from './styles'
import { formatPrice } from '../../utils/formatPrice'
import { format } from 'date-fns'
import { PriceContext } from '../PriceBlock'

type LastSale = {
  price: string
  date: string
}

type HistoryTableRow = {
  psa: number | null
  price: number | null
  variation: number
  date: string
}[]

export type HistoryTableProps = {
  cardId: string
  setPriceTableFulllVisibility: () => void
}

const HistoryPriceTable = ({
  cardId,
  setPriceTableFulllVisibility
}: HistoryTableProps) => {
  const { lastSale } = useContext(PriceContext)
  const [, setLastSale] = useState<LastSale>({ price: '0', date: '0' })
  const [historyTable, setHistoryTable] = useState<HistoryTableRow>([
    { psa: 10, price: 0, variation: 0, date: '0' }
  ])

  useQuery<QueryPrices, QueryPricesVariables>(QUERY_PRICES, {
    variables: { card: cardId, limit: 8, sort: 'date:desc' },
    onCompleted: (data) => {
      setLastSale({
        price: formatPrice(data.prices[0].price),
        date: format(new Date(data.prices[0].date), 'd MMM, yyyy')
      })

      const newHistoryTable = data.prices.map((sale) => ({
        psa: sale.grade,
        price: sale.price,
        date: sale.date,
        variation: 0,
        psaCert: { number: '517140398', link: '/' },
        listing: { number: '193880494201', link: '/' },
        saleType: 'Auction',
        seller: { id: 'gulfcoasthobby', link: '/' }
      }))

      setHistoryTable(newHistoryTable)
    }
  })

  return (
    <>
      <S.SummaryWrapper>
        <S.SummaryDetail>Last Sale</S.SummaryDetail>
        <S.SummaryTitle>{formatPrice(lastSale.price)}</S.SummaryTitle>
        <S.SummaryDetail>
          {format(new Date(lastSale.date), 'd MMM, yyyy')}
        </S.SummaryDetail>
      </S.SummaryWrapper>
      <S.HistoryTableWrapper>
        <S.HistoryTableTitleWrapper>
          <S.HistoryTableTitle>History</S.HistoryTableTitle>
          <S.HistoryTableViewAllButton onClick={setPriceTableFulllVisibility}>
            View all
          </S.HistoryTableViewAllButton>
        </S.HistoryTableTitleWrapper>
        <S.HistoryTable>
          <tbody>
            {historyTable.map((row, index) => (
              <tr key={index}>
                <td>
                  <S.HistoryTablePSA
                    purple={row.psa === 1 || row.psa === 6}
                    green={row.psa === 2 || row.psa === 7}
                    orange={row.psa === 3 || row.psa === 8}
                    blue={row.psa === 4 || row.psa === 9}
                    pink={row.psa === 5 || row.psa === 10}
                  >
                    {row.psa}
                  </S.HistoryTablePSA>
                </td>
                <td>
                  <S.HistoryTablePrice>${row.price}</S.HistoryTablePrice>
                </td>
                <td>
                  <S.HistoryTableVariation
                    positive={row.variation > 0}
                    negative={row.variation < 0}
                  >
                    {row.variation > 0
                      ? `+ ${row.variation}%`
                      : `${row.variation}%`}
                  </S.HistoryTableVariation>
                </td>
                <td>
                  <S.HistoryTableDate>{row.date}</S.HistoryTableDate>
                </td>
              </tr>
            ))}
          </tbody>
        </S.HistoryTable>
      </S.HistoryTableWrapper>
    </>
  )
}

export default HistoryPriceTable
