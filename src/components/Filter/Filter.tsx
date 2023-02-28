import FilterButton from './FilterButton';
import './Filter.scss';

const filterSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

const Filter = () => {
  const filterSelect = (val: string) => {
    console.log(val);
  };

  return (
    <>
      <h3>Sizes:</h3>
      <div id='filter-container'>
        {filterSizes.map((size) => (
          <FilterButton key={size} value={size} onSelect={filterSelect} />
        ))}
      </div>
    </>
  );
};

export default Filter;
