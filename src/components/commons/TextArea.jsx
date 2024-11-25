import './TextArea.css';
import { useState, useRef } from 'react';

const TextArea = ({ content, readOnly, setContent }) => {
  // const TextArea = ({ content, readOnly, setContent }) => {
  const [tempContent, setTempContent] = useState(content);
  let timerId = useRef(0);

  const handleContentChange = (e) => {
    // 화면은 tempContext 통해서 계속 인터랙션 만들어주기
    setTempContent(e.target.value);

    // 부모 컴포넌트에 있어서 자식 전체 리렌더링을 발생시키는 setContent는 입력이 끝날 때마다 변경
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    // 실제 content를 변경시켜주는 setContent는 debounce 시간 종료 후 실행
    timerId.current = setTimeout(() => {
      setContent(e.target.value);
    }, 1000);
  };

  return (
    <div className='text-area-container'>
      <textarea
        name='content'
        value={tempContent}
        placeholder='오늘의 일기를 작성해 보세요...'
        readOnly={readOnly}
        onChange={handleContentChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
