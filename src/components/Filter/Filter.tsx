import FilterButton from './FilterButton';
import './Filter.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { filterProducts } from '../../store/productSlice';

const filterSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

const Filter = () => {
  const dispatch = useAppDispatch();
  const filterVal = useAppSelector((state) => state.products.filterValue);

  const filterHandler = (val: string) => {
    dispatch(filterProducts(val));
  };

  return (
    <>
      <h3>Sizes:</h3>
      <div id='filter-container'>
        {filterSizes.map((size) => (
          <FilterButton
            key={size}
            value={size}
            onFilter={filterHandler}
            isActive={size === filterVal ? true : false}
          />
        ))}
      </div>
    </>
  );
};

export default Filter;
