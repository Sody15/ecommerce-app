import './FilterButton.scss';

const FilterButton: React.FC<{
  value: string;
  isActive: boolean;
  onFilter: (filterVal: string) => void;
}> = ({ value, isActive, onFilter }) => {
  const onFilterHandler = () => {
    if (isActive) {
      onFilter('');
    } else {
      onFilter(value);
    }
  };

  return (
    <button
      className={`filter-btn ${isActive ? 'active' : ''}`}
      type='button'
      onClick={onFilterHandler}
    >
      {value}
    </button>
  );
};
export default FilterButton;
