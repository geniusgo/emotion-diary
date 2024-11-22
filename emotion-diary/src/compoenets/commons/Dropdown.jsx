import './Dropdown.css';

const Dropdown = ({ onSortTypeChange }) => {
  return (
    <div className='dropdown'>
      <select onChange={onSortTypeChange}>
        <option value='latest'>최신 순</option>
        <option value='oldest'>오래된 순</option>
      </select>
    </div>
  );
};

export default Dropdown;
