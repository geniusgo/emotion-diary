import './DiaryList.css';
import Button from './Button';
import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const getSortedData = ({ data, sortType }) => {
  // toSorted는 원본 배열을 놔두고 새로운 정렬된 배열을 반환
  return data.toSorted((a, b) => {
    return sortType === 'latest'
      ? Number(a.createdDate) - Number(b.createdDate)
      : Number(b.createdDate) - Number(a.createdDate);
  });
};

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState('latest');
  const nav = useNavigate();

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const sortedData = getSortedData({ data, sortType });

  return (
    <div className='diary-list'>
      <div className='menu-bar'>
        <select onChange={onChangeSortType}>
          <option value='latest'>최신순</option>
          <option value='oldest'>오래된 순</option>
        </select>
        <Button
          onClick={() => {
            nav('/new');
          }}
          text='새로운 일기 쓰기'
          type='POSITIVE'
        />
      </div>
      <div className='list-wrapper'>
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
