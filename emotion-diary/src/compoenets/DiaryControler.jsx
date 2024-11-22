import './DiaryControler.css';
import Dropdown from './Dropdown';
import Button from './Button';

const DiaryControler = ({ onSortTypeChange }) => {
  return (
    <div className='diary-controler-container'>
      <Dropdown onSortTypeChange={onSortTypeChange} />
      <Button text='새 일기 쓰기' type='positive' />
    </div>
  );
};

export default DiaryControler;
