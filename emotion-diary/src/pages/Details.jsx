import { useParams } from 'react-router-dom';

const Details = () => {
  const params = useParams();

  return <div>{`Details No.${params.id}`}</div>;
};

export default Details;
