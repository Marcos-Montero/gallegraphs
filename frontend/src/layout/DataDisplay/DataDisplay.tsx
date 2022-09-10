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
        <LandingDisplay>
          <h3>Search for a ticker!</h3>
        </LandingDisplay>
      )}
      {tickerState === "loading" && (
        <LandingDisplay>
          <h3>loading...</h3>
        </LandingDisplay>
      )}
      {tickerState === "data" && (
        <>
          <PriceChart />
          <Summary />
        </>
      )}
    </DataDisplayContainer>
  );
};
