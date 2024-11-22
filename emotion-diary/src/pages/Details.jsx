import { useParams } from 'react-router-dom';
import Header from '../compoenets/Header';
import Button from '../compoenets/Button';
import DetailEmotion from '../compoenets/DetailEmotion';
import DetailContent from '../compoenets/DetailContent';
import { useContext } from 'react';
import { DiaryStateContext } from '../App';
import { dateFormater } from '../utils/date-formater';

const Details = () => {
  const params = useParams();
  const diary = useContext(DiaryStateContext);
  const selectedDiary = diary.filter((item) => String(item.id) === String(params.id))[0];

  return (
    <div>
      <Header
        text={`${dateFormater(selectedDiary.diaryDate)} 기록`}
        leftBtn={<Button text={'< 뒤로 가기'} />}
        rightBtn={<Button text={'수정하기'} />}
      ></Header>
      <DetailEmotion emotionId={params.id} />
      <DetailContent />
    </div>
  );
};

export default Details;
