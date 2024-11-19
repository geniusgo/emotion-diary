import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [params, setParams] = useSearchParams();
  console.log(params.get('value'));

  return <>Home</>;
};

export default Home;
