import Header from '../components/Header';
import Button from '../components/commons/Button';
import Editor from '../components/Editor';
import Footer from '../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { useDiaryById } from '../hooks/useDiaryById';
import { createContext, useContext, useState } from 'react';
import { DiaryDispatchContext } from '../App';

export const EditItemContext = createContext();
export const EditSetItemContext = createContext();

const Edit = () => {
  const nav = useNavigate();
  const params = useParams();
  const selectedDiary = useDiaryById();
  const { handleCreate, handleUpdate, handleDelete } = useContext(DiaryDispatchContext);
  const [diaryDate, setDiaryDate] = useState(selectedDiary.diaryDate);
  const [emotionId, setEmotionId] = useState(selectedDiary.emotionId); // emotionId 클릭된 값 저장
  const [content, setContent] = useState(selectedDiary.content);
  const type = params.id ? 'edit' : 'new';

  const handlePageMoveToHome = () => {
    if (window.confirm('변경 사항이 저장되지 않습니다. 계속 할까요?')) {
      nav('/', { replace: true });
    }
  };

  const handleNewDiaryCreate = () => {
    if (window.confirm('작성하신 내용으로 일기를 생성합니다')) {
      handleCreate({ diaryDate, content, emotionId });
      nav('/', { replace: true });
    }
  };

  const handleDiaryUpdate = () => {
    if (window.confirm('작성한 내용으로 수정할까요?')) {
      handleUpdate({ id: selectedDiary.id, diaryDate, emotionId, content });
      nav('/', { replace: true });
    }
  };

  const handleDiaryDelete = () => {
    if (window.confirm('삭제된 일기는 복구되지 않습니다. 계속 할까요?')) {
      handleDelete(selectedDiary.id);
      nav('/', { replace: true });
    }
  };

  return (
    <div>
      <EditItemContext.Provider value={{ diaryDate, emotionId, content }}>
        <EditSetItemContext.Provider value={{ setDiaryDate, setEmotionId, setContent }}>
          <Header
            type={type}
            text={type === 'edit' ? '일기 수정하기' : '새 일기 쓰기'}
            leftBtn={<Button text='< 뒤로 가기' onClick={handlePageMoveToHome} />}
            rightBtn={<Button text='삭제하기' type='negative' onClick={handleDiaryDelete} />}
          />
          <Editor />
          <Footer
            type={type}
            onHandlePageMove={handlePageMoveToHome}
            onNewDiaryCreate={handleNewDiaryCreate}
            onDiaryUpdate={handleDiaryUpdate}
          ></Footer>
        </EditSetItemContext.Provider>
      </EditItemContext.Provider>
    </div>
  );
};

export default Edit;
