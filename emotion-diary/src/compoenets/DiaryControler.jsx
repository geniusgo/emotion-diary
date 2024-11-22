import './DiaryControler.css';
import Dropdown from './Dropdown';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const DiaryControler = ({ onSortTypeChange }) => {
  const nav = useNavigate();

  const handlePageMoveToNew = () => {
    nav('/new');
  };

  return (
    <div className='diary-controler-container'>
      <Dropdown onSortTypeChange={onSortTypeChange} />
      <Button text='새 일기 쓰기' type='positive' onClick={handlePageMoveToNew} />
    </div>
  );
};

export default DiaryControler;
