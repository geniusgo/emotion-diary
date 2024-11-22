import Header from '../compoenets/Header';
import Button from '../compoenets/Button';
import DiaryList from '../compoenets/DiaryList';
import { useState } from 'react';

const Home = () => {
  const [date, setDate] = useState(new Date());

  // 누르면 나오는 목록 날짜 기간에 맞게 바뀌도록 변경 필요
  const handleDateChange = (e) => {
    switch (e.target.textContent) {
      case '<':
        return setDate(
          new Date(date.getFullYear(), date.getMonth() - 1, date.getDate(), 0, 0, 0, 0)
        );
      case '>':
        return setDate(
          new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), 0, 0, 0, 0)
        );
      default:
        return;
    }
  };

  return (
    <div className='home'>
      <Header
        text={`${date.getFullYear()}. ${date.getMonth() + 1}`}
        leftBtn={<Button text='<' onDateChange={handleDateChange} />}
        rightBtn={<Button text='>' onDateChange={handleDateChange} />}
      />
      <DiaryList date={date} />
    </div>
  );
};

export default Home;
