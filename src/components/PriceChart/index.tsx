import { useState, useContext } from 'react'

import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

import * as S from './styles'
import { initialPerPsaMock, chartColors } from './chartData'
import { useQuery } from '@apollo/client'
import { QUERY_PRICES } from '../../graphql/queries/prices'
import {
  QueryPrices,
  QueryPricesVariables
} from '../../graphql/generated/QueryPrices'
import { PriceContext } from '../PriceBlock'

type PriceChartProps = {
  cardId: string
  cardName: string
}

const PriceChart = ({ cardName, cardId }: PriceChartProps) => {
  const { setLastSale, setIsLoading } = useContext(PriceContext)

  const [chartState, setChartState] = useState(initialPerPsaMock)

  const [activePSA, setActivePSA] = useState(10)

  const { data, loading } = useQuery<QueryPrices, QueryPricesVariables>(
    QUERY_PRICES,
    {
      variables: { card: cardId, grade: activePSA, sort: 'date:asc' },
      onCompleted: (data) => {
        const newChartValues = data.prices.map((item) => [
          item.date,
          item.price
        ])

        const newChartState = {
          series: [
            {
              name: `PSA ${activePSA}`,
              data: newChartValues
            }
          ],
          options: {
            ...chartState.options,
            colors: chartColors[activePSA - 1]
          }
        }
        setLastSale({
          price: data.prices[data.prices.length - 1].price,
          date: data.prices[data.prices.length - 1].date
        })

        setChartState(newChartState)

        setIsLoading(loading)
      }
    }
  )

  const lastUpdate = 'Last update 26 Dec 2020, 09:51 PM'

  const handlePSASelection = (psaValue: string): void => {
    const newPSAValue = parseInt(psaValue)
    setActivePSA(newPSAValue)
  }

  return (
    <>
      <S.PriceWrapper>
        <S.PriceInfoWrapper>
          <S.PriceNameAndPSAWrapper>
            <S.PriceCardTitle>{cardName}</S.PriceCardTitle>
            <S.PriceCardUpdateDetail>{lastUpdate}</S.PriceCardUpdateDetail>
          </S.PriceNameAndPSAWrapper>
          <S.PricePSASelectWrapper
            purple={activePSA == 1 || activePSA == 6}
            green={activePSA == 2 || activePSA == 7}
            orange={activePSA == 3 || activePSA == 8}
            blue={activePSA == 4 || activePSA == 9}
            pink={activePSA == 5 || activePSA == 10}
          >
            <S.PricePSASelect
              value={activePSA}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
                handlePSASelection(event.target.value)
              }
              purple={activePSA == 1 || activePSA == 6}
              green={activePSA == 2 || activePSA == 7}
              orange={activePSA == 3 || activePSA == 8}
              blue={activePSA == 4 || activePSA == 9}
              pink={activePSA == 5 || activePSA == 10}
            >
              <S.PricePSASelectOption value={10}>PSA 10</S.PricePSASelectOption>
              <S.PricePSASelectOption value={9}>PSA 9</S.PricePSASelectOption>
              <S.PricePSASelectOption value={8}>PSA 8</S.PricePSASelectOption>
              <S.PricePSASelectOption value={7}>PSA 7</S.PricePSASelectOption>
              <S.PricePSASelectOption value={6}>PSA 6</S.PricePSASelectOption>
              <S.PricePSASelectOption value={5}>PSA 5</S.PricePSASelectOption>
              <S.PricePSASelectOption value={4}>PSA 4</S.PricePSASelectOption>
              <S.PricePSASelectOption value={3}>PSA 3</S.PricePSASelectOption>
              <S.PricePSASelectOption value={2}>PSA 2</S.PricePSASelectOption>
              <S.PricePSASelectOption value={1}>PSA 1</S.PricePSASelectOption>
            </S.PricePSASelect>
          </S.PricePSASelectWrapper>
        </S.PriceInfoWrapper>
        <S.PriceChartWrapper>
          <div>
            {data && (
              <ReactApexChart
                options={chartState.options}
                series={chartState.series}
                type="area"
                height={250}
              />
            )}
          </div>
        </S.PriceChartWrapper>
      </S.PriceWrapper>
    </>
  )
}

export default PriceChart
