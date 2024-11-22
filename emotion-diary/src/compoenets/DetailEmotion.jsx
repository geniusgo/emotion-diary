import './DetailEmotion.css';
import { emotionName } from '../utils/emotion-name';
import EmotionCard from './commons/EmotionCard';

const DetailEmotion = ({ emotionId }) => {
  return (
    <section className='detail-emotion'>
      <h4>오늘의 감정</h4>
      <EmotionCard emotionId={emotionId} />
    </section>
  );
};

export default DetailEmotion;
