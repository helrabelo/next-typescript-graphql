import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

// import Image from 'next/image'

import * as S from './styles'
import { initialPopulationMock } from './mock'

export type PopulationChartData = {
  [k: string]: {
    name: string
    data: [number, number][]
  }
}

export type PopulationChartProps = {
  lastUpdate: string
  populationChartData: PopulationChartData
}

const PopulationChart = ({
  lastUpdate,
  populationChartData
}: PopulationChartProps) => {
  return (
    <S.PopulationWrapper>
      <S.PopulationInfo>
        <S.PopulationCardTitle>Population</S.PopulationCardTitle>
        <S.PopulationCardUpdateDetail>
          {lastUpdate}
        </S.PopulationCardUpdateDetail>
      </S.PopulationInfo>

      <div>
        <ReactApexChart
          options={initialPopulationMock.options}
          series={Object.values(populationChartData)}
          type="area"
          height={250}
        />
      </div>
    </S.PopulationWrapper>
  )
}

export default PopulationChart
