import { createContext, FC, ReactNode, useContext, useState } from 'react'
type TickerLine = {
  close?: number
  date?: string
}
type Summary =
  | {
      marketCap?: string
      trailingPE?: string
      forwardPE?: string
      sharesOutstanding?: string
      sharesShort?: string
      sharesPercentSharesOut?: string
      heldPercentInsiders?: string
      shortRatio?: string
      shortPercentOfFloat?: string
      bookValue?: string
      priceToBook?: string
      netIncomeToCommon?: string
      trailingEps?: string
      forwardEps?: string
      pegRatio?: string
      lastDividendValue?: string
      totalCash?: string
      totalCashPerShare?: string
      ebitda?: string
      totalDebt?: string
      quickRatio?: string
      currentRatio?: string
      totalRevenue?: string
      debtToEquity?: string
      revenuePerShare?: string
      returnOnAssets?: string
      returnOnEquity?: string
      grossProfits?: string
      freeCashflow?: string
      operatingCashflow?: string
      earningsGrowth?: string
      revenueGrowth?: string
      grossMargins?: string
      ebitdaMargins?: string
      operatingMargins?: string
      profitMargins?: string
    }
  | undefined
type Ticker = undefined | TickerLine[]
type Context = {
  ticker: Ticker
  summary: Summary
  setTicker: (ticker: Ticker) => void
  setSummary: (summary: Summary) => void
}
const TickerContext = createContext<Context | undefined>(undefined)

type Props = {
  children?: ReactNode
}

export const TickerProvider: FC<Props> = ({ children }) => {
  const [ticker, setTicker] = useState<undefined | Ticker>(undefined)
  const [summary, setSummary] = useState<undefined | Summary>(undefined)
  return (
    <TickerContext.Provider value={{ ticker, setTicker, summary, setSummary }}>
      {children}
    </TickerContext.Provider>
  )
}
export const useTicker = () => {
  const context = useContext(TickerContext)
  if (context === undefined) {
    throw new Error('useTicker must be used within a provider')
  }
  return context
}
