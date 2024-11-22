import Header from '../compoenets/Header';
import Button from '../compoenets/Button';
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
    </div>
  );
};

export default New;
