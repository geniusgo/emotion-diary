import Header from '../compoenets/Header';
import Button from '../compoenets/commons/Button';
import Editor from '../compoenets/Editor';
import Footer from '../compoenets/Footer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDiaryById } from '../hooks/useDiaryById';

const Edit = () => {
  const nav = useNavigate();
  const selectedDiary = useDiaryById();

  console.log(selectedDiary);

  const handlePageMoveToHome = () => {
    if (window.confirm('변경 사항이 저장되지 않습니다. 계속 할까요?')) {
      nav('/', { replace: true });
    }
  };

  return (
    <div>
      <Header
        text='일기 수정하기'
        leftBtn={<Button text='< 뒤로 가기' onClick={handlePageMoveToHome} />}
        rightBtn={<Button text='삭제하기' />}
      />
      <Editor />
      <Footer></Footer>
    </div>
  );
};

export default Edit;
