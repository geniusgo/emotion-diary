import './DiaryItem.css';
import Button from './Button';

const DiaryItem = ({ date, content, emotionId }) => {
  return (
    <div className='diary-item-container'>
      <div className={`img-container${emotionId ? ` emotion${emotionId}` : ''}`}>
        <img src={`./../src/assets/emotion${emotionId}.png`} alt='emotion-image' />
      </div>
      <div className='contents'>
        <p className='date'>{date}</p>
        <p className='content'>{content}</p>
      </div>
      <Button text='수정하기' />
    </div>
  );
};

export default DiaryItem;
