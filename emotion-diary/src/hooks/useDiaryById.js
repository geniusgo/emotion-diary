import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DiaryStateContext } from '../App';

export const useDiaryById = () => {
  const params = useParams();
  const diary = useContext(DiaryStateContext);

  return params.id ? diary.filter((item) => String(item.id) === String(params.id))[0] : '';
};
