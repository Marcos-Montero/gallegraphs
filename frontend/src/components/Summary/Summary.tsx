import { useEffect } from 'react'
import { useTicker } from '../../context/tickerContext'
import { TextField } from '../TextField/TextField'
import { SummaryContainer } from './style'

export const Summary = () => {
  const { summary } = useTicker()
  useEffect(() => {
    console.log(summary)
  }, [summary])
  return (
    <SummaryContainer>
      {summary &&
        Object.entries(summary).map(([k, v]: any, i: number) => (
          <TextField key={i} k={k} v={v} />
        ))}
    </SummaryContainer>
  )
}
