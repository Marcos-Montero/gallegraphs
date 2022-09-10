import { DataDisplay } from "./layout/DataDisplay/DataDisplay";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";

const App = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <DataDisplay />
    </>
  );
};

export default App;
