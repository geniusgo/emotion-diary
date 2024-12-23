import './DiaryController.css';
import Dropdown from './commons/Dropdown';
import Button from './commons/Button';
import { useNavigate } from 'react-router-dom';

const DiaryController = ({ onSortTypeChange }) => {
  const nav = useNavigate();

  const handlePageMoveToNew = () => {
    nav('/new');
  };

  return (
    <div className='diary-controller-container'>
      <Dropdown onSortTypeChange={onSortTypeChange} />
      <Button text='새 일기 쓰기' type='positive' onClick={handlePageMoveToNew} />
    </div>
  );
};

export default DiaryController;
