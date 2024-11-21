import './DiaryList.css';
import Dropdown from './Dropdown';
import Button from './Button';
import DiaryItem from './DiaryItem';
import { useContext } from 'react';
import { DiaryStateContext } from '../App';
import { dateFormater } from './../utils/date-formater.js';

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
  const filteredDiary = filterByDiaryMonth(date, diary);

  return (
    <div className='diary-list-container'>
      <div className='menu'>
        <Dropdown />
        <Button text='새 일기 쓰기' type='positive' />
      </div>
      {filteredDiary.map((item) => {
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
