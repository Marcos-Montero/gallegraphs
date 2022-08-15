import ChartExample from './components/ChartExample/ChartExample'
import { Header } from './components/Header/Header'
import { SearchBar } from './components/SearchBar/SearchBar'
import { Summary } from './components/Summary/Summary'

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <ChartExample />
      <Summary />
    </div>
  )
}

export default App
