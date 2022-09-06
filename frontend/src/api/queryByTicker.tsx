export const queryByTicker = async (ticker: string) => {
  const res1 = await fetch(
    `http://localhost:3000/historical?symbol=${ticker}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    },
  )
  const res2 = await fetch(`http://localhost:3000/quote?symbol=${ticker}`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
  const priceData = await res1.json()
  const summaryData = await res2.json()

  return { priceData, summaryData: filterQuote(summaryData) }
}
const filterQuote = (summaryData: any) => {
  const { summaryDetail, defaultKeyStatistics, financialData } = summaryData
  return {
    marketCap: summaryDetail.marketCap,
    trailingPE: summaryDetail.trailingPE,
    forwardPE: summaryDetail.forwardPE,
    sharesOutstanding: defaultKeyStatistics.sharesOutstanding,
    sharesShort: defaultKeyStatistics.sharesShort,
    sharesPercentSharesOut: defaultKeyStatistics.sharesPercentSharesOut,
    heldPercentInsiders: defaultKeyStatistics.heldPercentInsiders,
    shortRatio: defaultKeyStatistics.shortRatio,
    shortPercentOfFloat: defaultKeyStatistics.shortPercentOfFloat,
    bookValue: defaultKeyStatistics.bookValue,
    priceToBook: defaultKeyStatistics.priceToBook,
    netIncomeToCommon: defaultKeyStatistics.netIncomeToCommon,
    trailingEps: defaultKeyStatistics.trailingEps,
    forwardEps: defaultKeyStatistics.forwardEps,
    pegRatio: defaultKeyStatistics.pegRatio,
    lastDividendValue: defaultKeyStatistics.lastDividendValue,
    totalCash: financialData.totalCash,
    totalCashPerShare: financialData.totalCashPerShare,
    ebitda: financialData.ebitda,
    totalDebt: financialData.totalDebt,
    quickRatio: financialData.quickRatio,
    currentRatio: financialData.currentRatio,
    totalRevenue: financialData.totalRevenue,
    debtToEquity: financialData.debtToEquity,
    revenuePerShare: financialData.revenuePerShare,
    returnOnAssets: financialData.returnOnAssets,
    returnOnEquity: financialData.returnOnEquity,
    grossProfits: financialData.grossProfits,
    freeCashflow: financialData.freeCashflow,
    operatingCashflow: financialData.operatingCashflow,
    earningsGrowth: financialData.earningsGrowth,
    revenueGrowth: financialData.revenueGrowth,
    grossMargins: financialData.grossMargins,
    ebitdaMargins: financialData.ebitdaMargins,
    operatingMargins: financialData.operatingMargins,
    profitMargins: financialData.profitMargins,
  }
}
