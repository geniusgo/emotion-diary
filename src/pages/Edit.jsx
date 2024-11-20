import { useParams } from 'react-router-dom';

const Edit = () => {
  const params = useParams();
  return <>{params.id}번 일기입니다</>;
};

export default Edit;
