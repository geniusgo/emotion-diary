import './Dropdown.css';

const Dropdown = () => {
  return (
    <div className='dropdown'>
      <select>
        <option>최신 순</option>
        <option>오래된 순</option>
      </select>
    </div>
  );
};

export default Dropdown;
