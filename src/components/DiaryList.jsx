import './DiaryList.css';
import DiaryItem from './DiaryItem';
import DiaryController from './DiaryController.jsx';
import { useContext, useState } from 'react';
import { DiaryStateContext } from '../App';

const sortByDiaryMonth = (diary, sortType) => {
  return diary.toSorted((a, b) => (a.diaryDate - b.diaryDate) * (sortType === 'latest' ? -1 : 1));
};

const filterByDiaryMonth = (date, diary) => {
  return diary.filter((item) => {
    const MIN_DATE = new Date(date.getFullYear(), date.getMonth(), 1);
    const MAX_DATE = new Date(date.getFullYear(), date.getMonth() + 1, 1);

    return item.diaryDate >= MIN_DATE && item.diaryDate < MAX_DATE;
  });
};

const DiaryList = ({ date }) => {
  const diary = useContext(DiaryStateContext); // 전역으로 관리돼야하는 상태 받아오기
  const [sortType, setSortType] = useState('latest');
  // Header text로 있는 달에 해당하는 item을 filter 해서 정렬 기준으로 정렬한 배열을 반환
  const filteredDiary = sortByDiaryMonth(filterByDiaryMonth(date, diary), sortType);

  const handleSortTypeChange = (e) => {
    setSortType(e.target.value);
  };

  return (
    <div className='diary-list-container'>
      <DiaryController onSortTypeChange={handleSortTypeChange} />
      <div className='diary-items-container'>
        {filteredDiary.map((item) => {
          return <DiaryItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default DiaryList;
