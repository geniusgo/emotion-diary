import './Viewer.css';
import { getEomtionImage } from '../utils/get-emotion-image';
import { emotionList } from '../utils/constants.js';

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find((item) => String(item.emotionId) === String(emotionId));

  return (
    <div className='viewer'>
      <section className='img-section'>
        <h4>오늘의 감정</h4>
        <div className={`emotion-img-wrapper emotion-img-wrapper-${emotionId}`}>
          <img src={getEomtionImage(emotionId)} alt='' />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className='content-section'>
        <h4>오늘의 일기</h4>
        <div className='contents-wrapper'>
          <p>{content}</p>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
