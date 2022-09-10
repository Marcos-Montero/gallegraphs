import { ChangeEvent, useState } from "react";
import { queryByTicker } from "../../api/queryByTicker";
import { useTicker } from "../../context/tickerContext";
import { SearchContainer } from "./style";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { setPriceData, setSummary, tickerState, setTickerState } = useTicker();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const search = async () => {
    setTickerState("loading");
    const { priceData, summaryData } = await queryByTicker(searchValue);
    console.log(priceData);
    setPriceData(priceData);
    setSummary(summaryData);
    setTickerState("data");
  };
  return (
    <SearchContainer>
      <input type="text" value={searchValue} onChange={handleChange}></input>
      <button onClick={search} disabled={tickerState === "loading"}>
        search
      </button>
    </SearchContainer>
  );
};
