import './DiaryItem.css';
import Button from './commons/Button';
import { useNavigate } from 'react-router-dom';
import { dateFormatter } from './../utils/date-formatter.js';
import EmotionCard from './commons/EmotionCard';

const DiaryItem = ({ id, diaryDate, content, emotionId }) => {
  const nav = useNavigate();

  const handlePageMoveToDetails = (e) => {
    if (e.target.tagName !== 'BUTTON') {
      nav(`/details/${id}`);
    }
  };

  const handlePageMoveToEdit = (e) => {
    if (e.target.tagName === 'BUTTON') {
      nav(`/edit/${id}`);
    }
  };

  return (
    <div onClick={handlePageMoveToDetails} className='diary-item-container'>
      <EmotionCard emotionId={emotionId} selectedEmotionId={emotionId} />
      <div className='contents'>
        <p className='date'>{dateFormatter(diaryDate, '. ')}</p>
        <p className='content'>{content}</p>
      </div>
      <Button text='수정하기' onClick={handlePageMoveToEdit} />
    </div>
  );
};

export default DiaryItem;
