const getPrices = async (ticker: string) => {
  const res = await fetch(`http://localhost:3000/historical?symbol=${ticker}`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return res.json();
};
const getSummary = async (ticker: string) => {
  const res = await fetch(`http://localhost:3000/quote?symbol=${ticker}`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return await res.json();
};
const getFinancials = async (ticker: string) => {
  const res = await fetch(`http://localhost:3000/financials?symbol=${ticker}`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return await res.json();
};

export const queryByTicker = async (ticker: string) => {
  const priceData = await getPrices(ticker);
  const summaryData = await getSummary(ticker);
  const financialsData = await getFinancials(ticker);
  return { priceData, summaryData: filterQuote(summaryData) };
};
const filterQuote = (summaryData: any) => {
  const { summaryDetail, defaultKeyStatistics, financialData } = summaryData;
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
  };
};
