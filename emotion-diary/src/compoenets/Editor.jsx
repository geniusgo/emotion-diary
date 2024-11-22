import './Editor.css';
import Button from './commons/Button';
import DatePicker from './commons/DatePicker';
import EmotionCard from './commons/EmotionCard';
import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';
import { emotionName } from '../utils/emotion-name';

// 전반적으로 컴포넌트 쪼개보기
const Editor = () => {
  const diary = useContext(DiaryStateContext);
  const [selectedEmotionId, setselectedEmotionId] = useState(0); // emotionId 클릭된 값 저장

  const handleEmotionCardClick = (e) => {
    const selectedId = [...e.currentTarget.children].findIndex(
      (elem) => elem === e.target || [...elem.children].includes(e.target)
    );

    setselectedEmotionId(selectedId + 1);
  };

  // 초기 값 value 전반적으로 추가 필요
  return (
    <div className='editor-container'>
      <section className='today-date-container'>
        <h4>오늘의 날짜 📆</h4>
        <DatePicker date={new Date()} />
      </section>
      <section className='emotion-cards-section'>
        <h4>오늘의 감정 😄</h4>
        <div className='emotion-cards-container'>
          <div onClick={handleEmotionCardClick} className='emotion-cards'>
            {[...Object.keys(emotionName)].map((id) => (
              <EmotionCard key={id} emotionId={Number(id)} selectedEmotionId={selectedEmotionId} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <h4>오늘의 일기 📝</h4>
        {/* emotion-card 컴포넌트로 넣는거 어떻게 할지 고민해서 처리해보기 */}
      </section>
      <div className='button-container'>
        <Button text='취소하기' />
        <Button text='작성 완료' type='positive' />
      </div>
    </div>
  );
};

export default Editor;
