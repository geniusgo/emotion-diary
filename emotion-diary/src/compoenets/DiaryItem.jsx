import './DiaryItem.css';
import Button from './commons/Button';
import { useNavigate } from 'react-router-dom';
import { dateFormater } from './../utils/date-formater.js';

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
      <div className={`img-container${emotionId ? ` emotion${emotionId}` : ''}`}>
        <img src={`./../src/assets/emotion${emotionId}.png`} alt='emotion-image' />
      </div>
      <div className='contents'>
        <p className='date'>{dateFormater(diaryDate)}</p>
        <p className='content'>{content}</p>
      </div>
      <Button text='수정하기' onClick={handlePageMoveToEdit} />
    </div>
  );
};

export default DiaryItem;
