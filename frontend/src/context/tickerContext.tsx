import { createContext, FC, ReactNode, useContext, useState } from "react";
type PriceLine = {
  close?: number;
  date?: string;
};
type Summary =
  | {
      marketCap?: string;
      trailingPE?: string;
      forwardPE?: string;
      sharesOutstanding?: string;
      sharesShort?: string;
      sharesPercentSharesOut?: string;
      heldPercentInsiders?: string;
      shortRatio?: string;
      shortPercentOfFloat?: string;
      bookValue?: string;
      priceToBook?: string;
      netIncomeToCommon?: string;
      trailingEps?: string;
      forwardEps?: string;
      pegRatio?: string;
      lastDividendValue?: string;
      totalCash?: string;
      totalCashPerShare?: string;
      ebitda?: string;
      totalDebt?: string;
      quickRatio?: string;
      currentRatio?: string;
      totalRevenue?: string;
      debtToEquity?: string;
      revenuePerShare?: string;
      returnOnAssets?: string;
      returnOnEquity?: string;
      grossProfits?: string;
      freeCashflow?: string;
      operatingCashflow?: string;
      earningsGrowth?: string;
      revenueGrowth?: string;
      grossMargins?: string;
      ebitdaMargins?: string;
      operatingMargins?: string;
      profitMargins?: string;
    }
  | undefined;
type tickerState = "empty" | "data" | "loading";
type PriceData = undefined | PriceLine[];
type Context = {
  priceData: PriceData;
  summary: Summary;
  financialsData: any;
  setFinancialsData: (financialsData: any) => void;
  setPriceData: (priceData: PriceData) => void;
  setSummary: (summary: Summary) => void;
  tickerState: tickerState;
  setTickerState: (tickerState: tickerState) => void;
};
const TickerContext = createContext<Context | undefined>(undefined);

type Props = {
  children?: ReactNode;
};

export const TickerProvider: FC<Props> = ({ children }) => {
  const [priceData, setPriceData] = useState<undefined | PriceData>(undefined);
  const [summary, setSummary] = useState<undefined | Summary>(undefined);
  const [financialsData, setFinancialsData] = useState<undefined | any>(
    undefined
  );
  const [tickerState, setTickerState] = useState<tickerState>("empty");
  return (
    <TickerContext.Provider
      value={{
        priceData,
        setPriceData,
        summary,
        setSummary,
        tickerState,
        setTickerState,
        financialsData,
        setFinancialsData,
      }}
    >
      {children}
    </TickerContext.Provider>
  );
};
export const useTicker = () => {
  const context = useContext(TickerContext);
  if (context === undefined) {
    throw new Error("useTicker must be used within a provider");
  }
  return context;
};
