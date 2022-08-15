import { createContext, FC, ReactNode, useContext, useState } from 'react'
type TickerLine = {
  close?: number
  date?: string
}
type Ticker = undefined | TickerLine[]
type Context = {
  ticker: Ticker
  setTicker: (ticker: Ticker) => void
}
const TickerContext = createContext<Context | undefined>(undefined)

type Props = {
  children?: ReactNode
}
export const TickerProvider: FC<Props> = ({ children }) => {
  const [ticker, setTicker] = useState<undefined | Ticker>(undefined)
  return (
    <TickerContext.Provider value={{ ticker, setTicker }}>
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
