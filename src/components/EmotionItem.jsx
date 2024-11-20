import './EmotionItem.css';
import { getEomtionImage } from './../utils/get-emotion-image.js';

const EmotionItem = ({ onClick, emotionId, emotionName, isSelected }) => {
  return (
    <div
      onClick={onClick}
      className={`emotion-item ${isSelected ? `emotion-item-on-${emotionId}` : ''}`}
    >
      <img className='emotion-img' src={getEomtionImage(emotionId)} alt='emotion-image' />
      <div className='emotion-name'>{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
