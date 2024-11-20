import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './Button';

const emotionList = [
  { emotionId: 1, emotionName: '완전 좋음' },
  { emotionId: 2, emotionName: '좋음' },
  { emotionId: 3, emotionName: '그럭 저럭' },
  { emotionId: 4, emotionName: '나쁨' },
  { emotionId: 5, emotionName: '끔찍함' },
];

const Editor = () => {
  const emotionId = 2;

  return (
    <div className='editor'>
      <section className='date-section'>
        <h4>오늘의 날짜</h4>
        <input type='date' />
      </section>
      <section className='emotion-section'>
        <h4>오늘의 감정</h4>
        <div className='emotion-list-wrapper'>
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === emotionId ? true : false}
            />
          ))}
        </div>
      </section>
      <section className='content-section'>
        <h4>오늘의 일기</h4>
        <textarea placeholder='오늘은 어땠나요? ...' />
      </section>
      <section className='button-section'>
        <Button text='취소하기' />
        <Button text='작성 완료' type='POSITIVE' />
      </section>
    </div>
  );
};

export default Editor;
