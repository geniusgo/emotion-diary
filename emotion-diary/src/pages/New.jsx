import Header from '../compoenets/Header';
import Button from '../compoenets/commons/Button';
import Editor from '../compoenets/Editor';
import Footer from '../compoenets/Footer';
import { useNavigate } from 'react-router-dom';

const New = () => {
  const nav = useNavigate();
  const handlePageMoveToHome = () => {
    if (window.confirm('작성하던 내용이 날아갑니다. 주의해주세요.')) {
      nav('/', { replace: true });
    }
  };

  return (
    <div>
      <Header
        text='새 일기 쓰기'
        leftBtn={<Button text='< 뒤로가기' onClick={handlePageMoveToHome} />}
        rightBtn={<div className='button-container'></div>}
      ></Header>
      <Editor />
      <Footer onClick={handlePageMoveToHome} />
    </div>
  );
};

export default New;
