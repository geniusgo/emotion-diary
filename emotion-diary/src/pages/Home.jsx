import Header from '../compoenets/Header';
import Button from '../compoenets/Button';
import DiaryList from '../compoenets/DiaryList';

const Home = () => {
  return (
    <div className='home'>
      <Header
        text={new Date().toDateString()}
        leftBtn={<Button text='<' />}
        rightBtn={<Button text='>' />}
      />
      <DiaryList />
    </div>
  );
};

export default Home;
