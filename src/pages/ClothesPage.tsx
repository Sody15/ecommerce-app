import Filter from '../components/Filter/Filter';
import ProductsList from '../components/Products/ProductsList';
import { DUMMY_DATA } from '../dummy-data';
import { setProducts } from '../store/productSlice';
import { store } from '../store/store';
import { wait } from '../util/timer';
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

export const loader = async () => {
  await wait(200);
  store.dispatch(setProducts(DUMMY_DATA));
  return true;
};
