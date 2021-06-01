import { useState } from 'react'
import { format } from 'date-fns'
import { useQuery } from '@apollo/client'

import {
  QueryPopulations,
  QueryPopulationsVariables
} from 'graphql/generated/QueryPopulations'
import { QUERY_POPULATIONS } from 'graphql/queries/populations'

import PopulationChart, {
  PopulationChartData
} from 'components/PopulationChart'
import PopulationTable, {
  PopulationTableProps
} from 'components/PopulationTable'

import * as S from './styles'
import Loader from '../Loader'

type PopulationBlockProps = {
  cardId: string
}

const initialPopulationTableState: PopulationTableProps = {
  PSA10: 0,
  PSA9: 0,
  PSA8: 0,
  PSA7: 0,
  PSA6: 0,
  PSA5: 0,
  PSA4: 0,
  PSA3: 0,
  PSA2: 0,
  PSA1: 0
}

const PopulationBlock = ({ cardId }: PopulationBlockProps) => {
  const [lastUpdate, setLastUpdate] = useState('')
  const [populationTable, setPopulationTable] = useState(
    initialPopulationTableState
  )

  const [populationChartData, setPopulationChartData] = useState({})

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { loading } = useQuery<QueryPopulations, QueryPopulationsVariables>(
    QUERY_POPULATIONS,
    {
      variables: { card: cardId, sort: 'date_checked:desc' },
      onCompleted: async ({ populations }) => {
        setLastUpdate(
          format(
            new Date(populations[populations.length - 1].date_checked),
            'd MMM, yyyy, hh:mm:aa'
          )
        )

        const newPopulationChartData: PopulationChartData = {}
        populations.forEach((population) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { date_checked, __typename, ...rest } = population
          Object.entries({ ...rest }).forEach((psa) => {
            if (!newPopulationChartData[psa[0]]) {
              newPopulationChartData[psa[0]] = {
                name: psa[0],
                data: []
              }
            }

            newPopulationChartData[psa[0]].data.push([
              new Date(date_checked).getTime() / 1000,
              psa[1]
            ])
          })
        })

        setPopulationChartData(newPopulationChartData)

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { __typename, date_checked, ...rest } = populations[0]

        setPopulationTable({ ...rest })
      }
    }
  )

  return (
    <>
      <S.PopulationChartWrapper>
        {loading && <Loader />}
        <PopulationChart
          lastUpdate={`Last update ${lastUpdate}`}
          populationChartData={populationChartData}
        />
        <S.PopulationPSATableWrapper>
          <PopulationTable {...populationTable} />
        </S.PopulationPSATableWrapper>
      </S.PopulationChartWrapper>
    </>
  )
}

export default PopulationBlock
