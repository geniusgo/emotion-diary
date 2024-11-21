import './Dropdown.css';

const Dropdown = ({ onChange }) => {
  return (
    <div className='dropdown'>
      <select onChange={onChange}>
        <option value='latest'>최신 순</option>
        <option value='oldest'>오래된 순</option>
      </select>
    </div>
  );
};

export default Dropdown;
