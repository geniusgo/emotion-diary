import './DiaryItem.css';
import { getEomtionImage } from '../utils/get-emotion-image';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  return (
    <div className='diary-item'>
      <div
        onClick={() => {
          nav(`/diary/${id}`);
        }}
        className={`img-section img-section-${emotionId}`}
      >
        <img src={getEomtionImage(emotionId)} alt='emotion-image' />
      </div>
      <div
        onClick={() => {
          nav(`/diary/${id}`);
        }}
        className='info-section'
      >
        <div className='created-date'>{new Date(createdDate).toLocaleDateString()}</div>
        <div className='content'>{content}</div>
      </div>
      <div className='button-section'>
        <Button
          onClick={() => {
            nav(`/edit/${id}`);
          }}
          text='수정하기'
        />
      </div>
    </div>
  );
};

export default DiaryItem;
