import './FilterButton.scss';

const FilterButton: React.FC<{
  value: string;
  onSelect: (val: string) => void;
}> = (props) => {
  const clickHandler = () => {
    props.onSelect(props.value);
  };

  return (
    <button className='btn filter-btn' type='button' onClick={clickHandler}>
      {props.value}
    </button>
  );
};
export default FilterButton;
