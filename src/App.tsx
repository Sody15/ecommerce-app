import './App.scss';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import ProductsList from './components/Products/ProductsList';

function App() {
  return (
    <main className='main-content'>
      <div className='header-container'>
        <Header />
      </div>
      <div className='filter-container'>
        <Filter />
      </div>
      <div className='products-container'>
        <ProductsList />
      </div>
    </main>
  );
}

export default App;
