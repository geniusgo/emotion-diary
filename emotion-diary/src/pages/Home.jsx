import Header from '../compoenets/Header';
import Button from '../compoenets/Button';

const Home = () => {
  return (
    <div className='home'>
      <Header
        text={new Date().toDateString()}
        leftBtn={<Button text='<' />}
        rightBtn={<Button text='>' />}
      />
    </div>
  );
};

export default Home;
