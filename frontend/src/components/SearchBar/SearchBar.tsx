import { ChangeEvent, useState } from 'react'
import { queryByTicker } from '../../api/queryByTicker'
import { useTicker } from '../../context/tickerContext'
import { SearchContainer } from './style'

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const { setTicker, setSummary } = useTicker()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }
  const search = async () => {
    const { priceData, summaryData } = await queryByTicker(searchValue)
    setTicker(priceData)
    setSummary(summaryData)
  }
  return (
    <SearchContainer>
      <input type="text" value={searchValue} onChange={handleChange}></input>
      <button onClick={search}>search</button>
    </SearchContainer>
  )
}
