import './DetailEmotion.css';
import EmotionCard from './commons/EmotionCard';

const DetailEmotion = ({ type, emotionId }) => {
  return (
    <section className='detail-emotion'>
      <h4>오늘의 감정</h4>
      <EmotionCard type={type} emotionId={emotionId} />
    </section>
  );
};

export default DetailEmotion;
