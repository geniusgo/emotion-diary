import './DiaryList.css';
import Dropdown from './Dropdown';
import Button from './Button';
import DiaryItem from './DiaryItem';

const DiaryList = () => {
  return (
    <div className='diary-list-container'>
      <div className='menu'>
        <Dropdown />
        <Button text='새 일기 쓰기' type='positive' />
      </div>
      <DiaryItem
        key={1}
        date={new Date(2024, 11, 20).toLocaleDateString()}
        content={'임시 일기 1'}
        emotionId={1}
      />
      <DiaryItem
        key={2}
        date={new Date(2024, 9, 20).toLocaleDateString()}
        content={'임시 일기 3'}
        emotionId={2}
      />
      <DiaryItem
        key={3}
        date={new Date(2024, 12, 20).toLocaleDateString()}
        content={'임시 일기 4'}
        emotionId={3}
      />
      <DiaryItem
        key={4}
        date={new Date(2024, 10, 20).toLocaleDateString()}
        content={'임시 일기 2'}
        emotionId={4}
      />
      <DiaryItem
        key={5}
        date={new Date(2024, 10, 20).toLocaleDateString()}
        content={'임시 일기 5'}
        emotionId={5}
      />
    </div>
  );
};

export default DiaryList;
