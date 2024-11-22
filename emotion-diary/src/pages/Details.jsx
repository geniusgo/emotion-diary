import { useParams, useNavigate } from 'react-router-dom';
import Header from '../compoenets/Header';
import Button from '../compoenets/commons/Button';
import DetailEmotion from '../compoenets/DetailEmotion';
import DetailContent from '../compoenets/DetailContent';
import { useContext } from 'react';
import { DiaryStateContext } from '../App';
import { dateFormater } from '../utils/date-formater';

const Details = () => {
  const nav = useNavigate();
  const params = useParams();
  const diary = useContext(DiaryStateContext);
  const selectedDiary = diary.filter((item) => String(item.id) === String(params.id))[0];

  const handlePageMoveToHome = () => {
    nav('/');
  };

  const handlePageMoveToEdit = () => {
    nav(`/edit/${params.id}`);
  };

  // emotionId가 아니라 diaryId로 감정 이미지 들어가 있음 수정 필요
  // teatarea에 기본 텍스트가 들어가 있도록 설정돼야 하고, readOnly가 돼야함 수정 필요
  return (
    <div>
      <Header
        text={`${dateFormater(selectedDiary.diaryDate, '. ')} 기록`}
        leftBtn={<Button text={'< 뒤로 가기'} onClick={handlePageMoveToHome} />}
        rightBtn={<Button text={'수정하기'} onClick={handlePageMoveToEdit} />}
      ></Header>
      <DetailEmotion emotionId={selectedDiary.emotionId} />
      <DetailContent content={selectedDiary.content} readOnly={true} />
    </div>
  );
};

export default Details;
