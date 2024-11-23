import Header from '../components/Header';
import Button from '../components/commons/Button';
import Editor from '../components/Editor';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useDiaryById } from '../hooks/useDiaryById';
import { useContext, useState } from 'react';
import { DiaryDispatchContext } from '../App';

const Edit = () => {
  const nav = useNavigate();
  const selectedDiary = useDiaryById();
  const { handleDelete, handleUpdate } = useContext(DiaryDispatchContext);
  const [diaryDate, setDiaryDate] = useState(selectedDiary.diaryDate);
  const [emotionId, setEmotionId] = useState(selectedDiary.emotionId); // emotionId 클릭된 값 저장
  const [content, setContent] = useState(selectedDiary.content);

  const handlePageMoveToHome = () => {
    if (window.confirm('변경 사항이 저장되지 않습니다. 계속 할까요?')) {
      nav('/', { replace: true });
    }
  };

  const handleDiaryDelete = () => {
    if (window.confirm('삭제된 일기는 복구되지 않습니다. 계속 할까요?')) {
      handleDelete(selectedDiary.id);
      nav('/', { replace: true });
    }
  };

  const handleDiaryUpdate = () => {
    if (window.confirm('작성한 내용으로 수정할까요?')) {
      handleUpdate({ id: selectedDiary.id, diaryDate, emotionId, content });
      nav('/', { replace: true });
    }
  };

  return (
    <div>
      <Header
        text='일기 수정하기'
        leftBtn={<Button text='< 뒤로 가기' onClick={handlePageMoveToHome} />}
        rightBtn={<Button text='삭제하기' type='negative' onClick={handleDiaryDelete} />}
      />
      <Editor
        diaryDate={diaryDate}
        emotionId={emotionId}
        content={content}
        setDiaryDate={setDiaryDate}
        setEmotionId={setEmotionId}
        setContent={setContent}
      />
      <Footer onClick={handlePageMoveToHome} onUpdate={handleDiaryUpdate}></Footer>
    </div>
  );
};

export default Edit;
