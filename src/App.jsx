import './App.css';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import NotFound from './pages/NotFound';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

/**
 * path 경로 정보
 * 1. '/': 모든 일기를 조회하는 Home 페이지
 * 2. '/new': 새로운 일기를 작성하는 New 페이지
 * 3. '/diary': 일기를 상세히 조회하는 Diary 페이지
 */

function App() {
  const nav = useNavigate();
  const onClickButton = () => {
    nav('/new');
  };

  return (
    <>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>new</Link>
        <Link to={'/diary'}>diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/new' element={<New />}></Route>
        <Route path='/diary/:id' element={<Diary />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

// 잘못된 경로로 들어오면 path *로 설정하고 element에 NotFound 전달
// Routes 컴포넌트 안에는 Route 컴포넌트만 사용 가능하다
// Routes 컴포넌트 밖에서 element를 추가하면 모든 페이지에서 보인다

export default App;
