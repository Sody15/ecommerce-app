import { RouterProvider } from 'react-router-dom';
import './App.scss';
import router from './router';

function App() {
  return (
    <RouterProvider router={router} />
    // <main className='main-content'>
    //   <div className='header-container'>
    //     <Header />
    //   </div>
    //   <div className='filter-container'>
    //     <Filter />
    //   </div>
    //   <div className='products-container'>
    //     <ProductsList />
    //   </div>
    // </main>
  );
}

export default App;
