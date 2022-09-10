import PriceChart from "../../components/PriceChart/PriceChart";
import { Summary } from "../../components/Summary/Summary";
import { useTicker } from "../../context/tickerContext";
import { LandingDisplay } from "../LandingDisplay/LandingDisplay";
import { DataDisplayContainer } from "./style";

export const DataDisplay = () => {
  const { tickerState } = useTicker();
  return (
    <DataDisplayContainer>
      {tickerState === "empty" && (
        <LandingDisplay>Search for a ticker!</LandingDisplay>
      )}
      {tickerState === "loading" && <LandingDisplay>loading...</LandingDisplay>}
      {tickerState === "data" && (
        <>
          <PriceChart />
          <Summary />
        </>
      )}
    </DataDisplayContainer>
  );
};
