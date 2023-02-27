import "./App.scss";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Filter />
      </main>
    </>
  );
}

export default App;
