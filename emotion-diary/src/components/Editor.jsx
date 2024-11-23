import './Editor.css';
import Button from './commons/Button';
import DatePicker from './commons/DatePicker';
import EmotionCard from './commons/EmotionCard';
// import { useContext } from 'react';
// import { DiaryStateContext } from '../App';
import { emotionName } from '../constants/constants';
import TextArea from './commons/TextArea';
import { useDiaryById } from '../hooks/useDiaryById';
// import { useParams } from 'react-router-dom';

const Editor = ({ diaryDate, emotionId, content, setDiaryDate, setEmotionId, setContent }) => {
  const handleEmotionCardClick = (e) => {
    const selectedId = [...e.currentTarget.children].findIndex(
      (elem) => elem === e.target || [...elem.children].includes(e.target)
    );

    setEmotionId(selectedId + 1);
  };

  // 초기 값 value 전반적으로 추가 필요
  return (
    <div className='editor-container'>
      <section className='today-date-container'>
        <h4>오늘의 날짜 📆</h4>
        <DatePicker diaryDate={diaryDate} setDiaryDate={setDiaryDate} />
      </section>
      <section className='emotion-cards-section'>
        <h4>오늘의 감정 😄</h4>
        <div className='emotion-cards-container'>
          <div onClick={handleEmotionCardClick} className='emotion-cards'>
            {[...Object.keys(emotionName)].map((id) => (
              <EmotionCard key={id} emotionId={Number(id)} selectedEmotionId={emotionId} />
            ))}
          </div>
        </div>
      </section>
      <section className='text-area-section'>
        <h4>오늘의 일기 📝</h4>
        <TextArea content={content} readOnly={false} setContent={setContent} />
        {/* emotion-card 컴포넌트로 넣는거 어떻게 할지 고민해서 처리해보기 */}
      </section>
    </div>
  );
};

export default Editor;
