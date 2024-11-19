import './App.css';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';

/**
 * path 경로 정보
 * 1. '/': 모든 일기를 조회하는 Home 페이지
 * 2. '/new': 새로운 일기를 작성하는 New 페이지
 * 3. '/diary': 일기를 상세히 조회하는 Diary 페이지
 */

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/new' element={<New />}></Route>
      <Route path='/diary' element={<Diary />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
}

// 잘못된 경로로 들어오면 path *로 설정하고 element에 NotFound 전달
// Routes 컴포넌트 안에는 Roㅕㅅㄷ

export default App;
