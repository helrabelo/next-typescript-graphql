import { QueryPopulations_populations } from 'graphql/generated/QueryPopulations'
import * as S from './styles'

const colorMap = [
  { pink: true },
  { blue: true },
  { orange: true },
  { green: true },
  { purple: true }
]

export type PopulationTableProps = Omit<
  QueryPopulations_populations,
  '__typename' | 'date_checked'
>

const PopulationTable = (props: PopulationTableProps) => {
  return (
    <S.PopulationPSATable>
      <tbody>
        {Object.entries(props).map((row, index) => {
          return (
            <tr key={index}>
              <td>
                <S.PopulationPSATableSpan {...colorMap[index % 5]} />
              </td>
              <td>
                <S.PopulationPSATableValue>{`PSA ${
                  10 - index
                }`}</S.PopulationPSATableValue>
              </td>
              <td>
                <S.PopulationPSATablePopulation>
                  {row[1]}
                </S.PopulationPSATablePopulation>
              </td>
            </tr>
          )
        })}
      </tbody>
    </S.PopulationPSATable>
  )
}

export default PopulationTable
