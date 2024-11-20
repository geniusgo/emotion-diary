import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryStateContext } from '../App';

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find((item) => String(item.id) === String(id));

    if (!currentDiaryItem) {
      alert('존재하지 않는 일기입니다');
      nav('/', { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [data, id]);

  return curDiaryItem;
};

export default useDiary;
