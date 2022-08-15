export const queryByTicker = async (ticker: string) => {
  const res = await fetch(
    `http://192.168.0.102:3000/historical?symbol=${ticker}`,
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    },
  )
  const results = await res.json()
  return results
}
