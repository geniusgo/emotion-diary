import './Editor.css';
import Button from './Button';

// 전반적으로 컴포넌트 쪼개보기
const Editor = () => {
  // 초기 값 value 전반적으로 추가 필요
  return (
    <div className='editor-container'>
      <section className='today-date-container'>
        <h4>오늘의 날짜 📆</h4>
        <input type='date' name='datePicker' />
      </section>
      <section>
        <h4>오늘의 감정 😄</h4>
      </section>
      <section>
        <h4>오늘의 일기 📝</h4>
      </section>
      <div className='button-container'>
        <Button text='취소하기' />
        <Button text='작성 완료' type='positive' />
      </div>
    </div>
  );
};

export default Editor;
