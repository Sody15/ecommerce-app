import Filter from '../components/Filter/Filter';
import ProductsList from '../components/Products/ProductsList';
import './ClothesPage.scss';

const ClothesPage = () => {
  return (
    <section className='clothes-page'>
      <div className='filter-container'>
        <Filter />
      </div>
      <div className='products-container'>
        <ProductsList />
      </div>
    </section>
  );
};

export default ClothesPage;
