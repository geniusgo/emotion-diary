import './DiaryList.css';
import Dropdown from './Dropdown';
import Button from './Button';

const DiaryList = () => {
  return (
    <div className='diary-list-container'>
      <div className='menu'>
        <Dropdown />
        <Button text='새 일기 쓰기' type='positive' />
      </div>
    </div>
  );
};

export default DiaryList;
