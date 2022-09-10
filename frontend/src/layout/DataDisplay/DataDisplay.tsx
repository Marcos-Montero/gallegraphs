import PriceChart from "../../components/PriceChart/PriceChart";
import { Summary } from "../../components/Summary/Summary";
import { DataDisplayContainer } from "./style";

export const DataDisplay = () => {
  return (
    <DataDisplayContainer>
      <PriceChart />
      <Summary />
    </DataDisplayContainer>
  );
};
