import './DiaryItem.css';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { dateFormater } from './../utils/date-formater.js';

const DiaryItem = ({ id, diaryDate, content, emotionId }) => {
  const nav = useNavigate();

  const handlePagesMove = (e) => {
    e.target.tagName !== 'BUTTON' ? nav(`/details/${id}`) : nav(`/edit/${id}`);
  };

  return (
    <div onClick={handlePagesMove} className='diary-item-container'>
      <div className={`img-container${emotionId ? ` emotion${emotionId}` : ''}`}>
        <img src={`./../src/assets/emotion${emotionId}.png`} alt='emotion-image' />
      </div>
      <div className='contents'>
        <p className='date'>{dateFormater(diaryDate)}</p>
        <p className='content'>{content}</p>
      </div>
      <Button text='수정하기' onClick={handlePagesMove} />
    </div>
  );
};

export default DiaryItem;
