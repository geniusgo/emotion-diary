import Header from '../components/Header';
import Button from '../components/commons/Button';
import Editor from '../components/Editor';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { DiaryDispatchContext } from '../App';

const New = () => {
  // const [diaryDate, setDiaryDate] = useState(new Date());
  // const [emotionId, setEmotionId] = useState(0); // emotionId 클릭된 값 저장
  // const [content, setContent] = useState('');
  // const { handleCreate } = useContext(DiaryDispatchContext);
  // const nav = useNavigate();

  // const handlePageMoveToHome = () => {
  //   if (window.confirm('변경 사항이 저장되지 않습니다. 계속 할까요?')) {
  //     nav('/', { replace: true });
  //   }
  // };

  // const handleNewDiaryCreate = () => {
  //   if (window.confirm('작성하신 내용으로 일기를 생성합니다')) {
  //     handleCreate({ diaryDate, content, emotionId });
  //     nav('/', { replace: true });
  //   }
  // };

  /** 입력된 값을 App.js의 onCreate dispatch 함수로 보내서 새로운 diary 추가하는 작업 설정해야 함 높은 확률로 Editor 컴포넌트에서 수행 필요 */
  return (
    <div>
      <Header
        text='새 일기 쓰기'
        leftBtn={<Button text='< 뒤로가기' onClick={handlePageMoveToHome} />}
        rightBtn={<div className='button-container'></div>}
      ></Header>
      <Editor
        diaryDate={diaryDate}
        emotionId={emotionId}
        content={content}
        setDiaryDate={setDiaryDate}
        setEmotionId={setEmotionId}
        setContent={setContent}
      />
      <Footer onClick={handlePageMoveToHome} onCreate={handleNewDiaryCreate} />
    </div>
  );
};

export default New;
