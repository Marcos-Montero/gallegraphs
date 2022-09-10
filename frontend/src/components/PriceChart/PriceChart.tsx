import dayjs from "dayjs";
import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import styled from "styled-components";
import { useTicker } from "../../context/tickerContext";
import { PriceChartContainer } from "./style";
const PlotStyled = styled(Plot)``;
const PriceChart = () => {
  const { priceData } = useTicker();
  const [xValues, setX] = useState<string[]>();
  const [yValues, setY] = useState<number[]>();
  const [figure, setFigure] = useState<any>();

  useEffect(() => {
    const tickerTimes = priceData?.reduce((acc: any, v) => {
      acc.push(v.date);
      return acc;
    }, []);
    const tickerPrices = priceData?.reduce((acc: any, v) => {
      acc.push(v.close);
      return acc;
    }, []);
    setX(tickerTimes);
    setY(tickerPrices);
    setFigure({
      data: [
        {
          name: "",
          type: "scatter",
          mode: "lines",
          x: xValues,
          y: yValues,
          marker: { color: "red" },
        },
      ],
      layout: {
        width: 620,
        height: 440,
        xaxis: {
          autorange: true,
          range: [dayjs().subtract(20, "year"), dayjs()],
          rangeselector: {
            buttons: [
              {
                count: 1,
                label: "30d",
                step: "month",
                stepmode: "backward",
              },
              {
                count: 6,
                label: "6m",
                step: "month",
                stepmode: "backward",
              },
              { step: "all" },
            ],
          },
          rangeslider: {
            range: [
              dayjs().subtract(20, "year").format("YYYY-MM-DD"),
              dayjs().format("YYYY-MM-DD"),
            ],
          },
          type: "date",
        },
        yaxis: {
          autorange: true,
          range: [0, 40],
          type: "linear",
        },
      },
      frames: [],
      config: {},
    });
  }, [priceData]);

  return (
    <PriceChartContainer>
      <h3>Price Chart</h3>
      <PlotStyled
        data={figure && figure.data}
        layout={figure && figure.layout}
        onUpdate={(figure) => setFigure(figure)}
      />
    </PriceChartContainer>
  );
};

export default PriceChart;
