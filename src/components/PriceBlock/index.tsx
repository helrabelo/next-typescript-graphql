import { useState, createContext, Dispatch, SetStateAction } from 'react'
import * as S from './styles'

import PriceChart from 'components/PriceChart'
import PriceTable from 'components/PriceTable'
import PriceTableFull from 'components/PriceTableFull'
import Loader from 'components//Loader'

interface ILastPrice {
  price: number | null
  date: string
}

interface IPriceInfoContext {
  lastSale: ILastPrice
  setLastSale: Dispatch<SetStateAction<ILastPrice>>
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}

const initialState: ILastPrice = { price: 0, date: '0' }

type PriceBlockProps = {
  cardId: string
  cardName: string
  priceTableFulllVisibility: boolean
  setPriceTableFulllVisibility: () => void
}

export const PriceContext = createContext<IPriceInfoContext>({
  lastSale: initialState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLastSale: (): void => {},
  isLoading: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsLoading: (): void => {}
})

const PriceBlock = ({
  cardId,
  cardName,
  priceTableFulllVisibility,
  setPriceTableFulllVisibility
}: PriceBlockProps) => {
  const [lastSale, setLastSale] = useState<ILastPrice>({
    price: 0,
    date: '0'
  })

  const [isLoading, setIsLoading] = useState(true)

  return (
    <S.MarketChartWrapper>
      {isLoading && <Loader />}
      <PriceContext.Provider
        value={{
          lastSale,
          setLastSale,
          isLoading,
          setIsLoading
        }}
      >
        {!priceTableFulllVisibility ? (
          <>
            <PriceChart cardId={cardId} cardName={cardName} />
            <S.HistoryWrapper>
              <PriceTable
                cardId={cardId}
                setPriceTableFulllVisibility={setPriceTableFulllVisibility}
              />
            </S.HistoryWrapper>
          </>
        ) : (
          <PriceTableFull
            cardId={cardId}
            cardName={cardName}
            setPriceTableFulllVisibility={setPriceTableFulllVisibility}
          />
        )}
      </PriceContext.Provider>
    </S.MarketChartWrapper>
  )
}

export default PriceBlock
