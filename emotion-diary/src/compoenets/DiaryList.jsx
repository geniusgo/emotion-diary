import './DiaryList.css';
import Dropdown from './Dropdown';
import Button from './Button';
import DiaryItem from './DiaryItem';
import { useContext, useState } from 'react';
import { DiaryStateContext } from '../App';
import { dateFormater } from './../utils/date-formater.js';

const sortByDiarymonth = (diary, sortType) => {
  console.log(sortType === 'latest' ? -1 : 1);
  return diary.toSorted((a, b) => (a.diaryDate - b.diaryDate) * (sortType === 'latest' ? 1 : -1));
};

const filterByDiaryMonth = (date, diary) => {
  return diary.filter((item) => {
    const MIN_DATE = new Date(new Date(date).getFullYear(), new Date(date).getMonth(), 1).getTime();
    const MAX_DATE = new Date(
      new Date(date).getFullYear(),
      new Date(date).getMonth() + 1,
      1
    ).getTime();

    return item.diaryDate >= MIN_DATE && item.diaryDate < MAX_DATE;
  });
};

const DiaryList = ({ date }) => {
  const diary = useContext(DiaryStateContext); // 전역으로 관리돼야하는 상태 받아오기
  const [sortType, setSortType] = useState('latest');
  const prepDiary = sortByDiarymonth(filterByDiaryMonth(date, diary), sortType);

  const onChange = (e) => {
    setSortType(e.target.value);
  };

  return (
    <div className='diary-list-container'>
      <div className='menu'>
        <Dropdown onChange={onChange} />
        <Button text='새 일기 쓰기' type='positive' />
      </div>
      {prepDiary.map((item) => {
        return (
          <DiaryItem
            key={item.id}
            date={dateFormater(item.diaryDate)}
            content={item.content}
            emotionId={item.emotionId}
          />
        );
      })}
    </div>
  );
};

export default DiaryList;
