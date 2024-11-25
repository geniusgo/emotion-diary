import './Editor.css';
import { emotionName } from '../constants/constants';
import DatePicker from './commons/DatePicker';
import EmotionCard from './commons/EmotionCard';
import TextArea from './commons/TextArea';
import { useContext } from 'react';
import { EditItemContext, EditSetItemContext } from '../pages/Edit';

const Editor = () => {
  const { diaryDate, emotionId, content } = useContext(EditItemContext);
  const { setDiaryDate, setEmotionId, setContent } = useContext(EditSetItemContext);

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
      </section>
    </div>
  );
};

export default Editor;
