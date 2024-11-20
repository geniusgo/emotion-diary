import './DiaryItem.css';
import { getEomtionImage } from '../utils/get-emotion-image';
import Button from './Button';

const DiaryItem = () => {
  const emotionId = 5;

  return (
    <div className='diary-item'>
      <div className={`img-section img-section-${emotionId}`}>
        <img src={getEomtionImage(emotionId)} alt='emotion-image' />
      </div>
      <div className='info-section'>
        <div className='created-date'>{new Date().toLocaleDateString()}</div>
        <div className='content'>콘텐츠</div>
      </div>
      <div className='button-section'>
        <Button text='수정하기' />
      </div>
    </div>
  );
};

export default DiaryItem;
