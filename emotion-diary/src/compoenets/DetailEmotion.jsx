import './DetailEmotion.css';
import { emotionName } from '../utils/emotion-name';

const DetailEmotion = ({ emotionId }) => {
  return (
    <section className='detail-emotion'>
      <h4>오늘의 감정</h4>
      <div className={`emotion${emotionId}`}>
        <img src={`./../src/assets/emotion${emotionId}.png`} alt='emotion-image' />
        <p>{emotionName[emotionId]}</p>
      </div>
    </section>
  );
};

export default DetailEmotion;
