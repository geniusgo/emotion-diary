import Header from '../components/Header';
import Button from '../components/Button';
import DiaryList from '../components/DiaryList';
import { useState, useContext } from 'react';
import { DiaryStateContext } from '../App';

const getMonthlyData = ({ pivotDate, data }) => {
  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 1, 0, 0, 0).getTime();
  return data.filter((item) => item.createdDate >= beginTime && item.createdDate < endTime);
};

const Home = () => {
  const [pivotDate, setPivotDate] = useState(new Date());
  const data = useContext(DiaryStateContext);
  const monthlyData = getMonthlyData({ pivotDate, data }); // header에 있는 달에 해당하는 데이터 추출하기

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text='<' />}
        rightChild={<Button onClick={onIncreaseMonth} text='>' />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
