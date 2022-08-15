import Plot from 'react-plotly.js'

const PriceChart = () => {
  return (
    <>
      <Plot
        data={[
          {
            name: '',
            type: 'scatter',
            mode: 'lines',
            x: [1.5, 2, 3],
            y: [],
            marker: { color: 'red' },
          },
        ]}
        layout={{ width: 620, height: 440, title: 'A Fancy Plot' }}
      />
    </>
  )
}

export default PriceChart
