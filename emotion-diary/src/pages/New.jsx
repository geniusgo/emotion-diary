import Header from '../compoenets/Header';
import Button from '../compoenets/commons/Button';
import Editor from '../compoenets/Editor';
import Footer from '../compoenets/Footer';
import { useNavigate } from 'react-router-dom';

const New = () => {
  const nav = useNavigate();

  const handlePageMoveToHome = () => {
    if (window.confirm('페이지를 떠나시겠습니까? 변경 사항이 저장되지 않을 수 있습니다.')) {
      nav('/', { replace: true });
    }
  };

  /** 입력된 값을 App.js의 onCreate dispatch 함수로 보내서 새로운 diary 추가하는 작업 설정해야 함 높은 확률로 Editor 컴포넌트에서 수행 필요 */
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
