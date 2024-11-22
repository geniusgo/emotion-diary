import Header from '../compoenets/Header';
import Button from '../compoenets/commons/Button';
import Editor from '../compoenets/Editor';
import { useNavigate } from 'react-router-dom';

const New = () => {
  const nav = useNavigate();
  const handlePageMoveToHome = () => {
    nav('/');
  };

  return (
    <div>
      <Header
        text='새 일기 쓰기'
        leftBtn={<Button text='< 뒤로가기' onClick={handlePageMoveToHome} />}
        rightBtn={<div className='button-container'></div>}
      ></Header>
      <Editor></Editor>
    </div>
  );
};

export default New;
