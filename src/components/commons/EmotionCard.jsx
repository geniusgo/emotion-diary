import './EmotionCard.css';
import { emotionName } from '../../constants/constants';

const EmotionCard = ({ type, emotionId, selectedEmotionId = 0 }) => {
  return (
    <div
      className={`emotion-card emotion${
        type === 'details' || selectedEmotionId === emotionId ? emotionId : '0'
      }`}
    >
      <img src={`./../src/assets/emotion${emotionId}.png`} alt='emotion-image' />
      <p>{emotionName[emotionId]}</p>
    </div>
  );
};

export default EmotionCard;
