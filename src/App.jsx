import './App.css';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit.jsx';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import { useReducer, useRef } from 'react';
import { createContext } from 'react';

const mockData = [
  {
    id: 1,
    createdData: new Date().getTime(),
    emotionId: 1,
    content: '1번 일기 내용',
  },
  {
    id: 2,
    createdData: new Date().getTime(),
    emotionId: 2,
    content: '2번 일기 내용',
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) => (String(item.id) === String(action.data.id) ? action.data : item));
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
};

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, [...mockData]);
  const idRef = useRef(3);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  return (
    <>
      <button
        onClick={() => {
          onCreate(new Date().getTime(), 1, 'Hello');
        }}
      >
        일기 추가 테스트
      </button>
      <button
        onClick={() => {
          onUpdate(1, new Date().getTime(), 3, '수정된 일기입니다');
        }}
      >
        일기 수정 테스트
      </button>
      <button
        onClick={() => {
          onDelete(1);
        }}
      >
        읽기 삭제 테스트
      </button>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/new' element={<New />}></Route>
            <Route path='/diary/:id' element={<Diary />}></Route>
            <Route path='/edit/:id' element={<Edit />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

// 잘못된 경로로 들어오면 path *로 설정하고 element에 NotFound 전달
// Routes 컴포넌트 안에는 Route 컴포넌트만 사용 가능하다
// Routes 컴포넌트 밖에서 element를 추가하면 모든 페이지에서 보인다

export default App;
