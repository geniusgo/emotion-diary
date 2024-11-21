import './DiaryList.css';
import Dropdown from './Dropdown';
import Button from './Button';
import DiaryItem from './DiaryItem';
import { useContext } from 'react';
import { DiaryStateContext } from '../App';
import { dateFormater } from './../utils/date-formater.js';

const DiaryList = () => {
  const diary = useContext(DiaryStateContext); // 전역으로 관리돼야하는 상태 받아오기

  return (
    <div className='diary-list-container'>
      <div className='menu'>
        <Dropdown />
        <Button text='새 일기 쓰기' type='positive' />
      </div>
      {diary.map((item) => {
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
