import ChartExample from './components/ChartExample/ChartExample'
import { Header } from './components/Header/Header'
import { SearchBar } from './components/SearchBar/SearchBar'

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <ChartExample />
    </div>
  )
}

export default App
