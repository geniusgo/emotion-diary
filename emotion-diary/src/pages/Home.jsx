import Header from '../compoenets/Header';
import Button from '../compoenets/Button';
import DiaryList from '../compoenets/DiaryList';
import { useContext } from 'react';
import { DiaryStateContext } from '../App';

const Home = () => {
  const diary = useContext(DiaryStateContext);

  // 누르면 나오는 목록 날짜 기간에 맞게 바뀌도록 변경 필요
  const onClick = (e) => {
    console.log(e.target);
  };

  return (
    <div className='home'>
      <Header
        text={new Date().toDateString()}
        leftBtn={<Button text='<' onClick={onClick} />}
        rightBtn={<Button text='>' onClick={onClick} />}
      />
      <DiaryList />
    </div>
  );
};

export default Home;
