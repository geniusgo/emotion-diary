import './EmotionCard.css';
import { emotionName } from '../../utils/emotion-name.js';

// details에도 쓸 수 있을 것 같고(사이즈 조절해서), edit/new 다 사용 가능
const EmotionCard = ({ emotionId, selectedEmotionId = true }) => {
  return (
    <div className={`emotion-card emotion${selectedEmotionId === emotionId ? emotionId : '0'}`}>
      <img src={`./../src/assets/emotion${emotionId}.png`} alt='emotion-image' />
      <p>{emotionName[emotionId]}</p>
    </div>
  );
};

export default EmotionCard;
