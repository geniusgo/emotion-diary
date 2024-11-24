import './App.css';
import Details from './pages/Details.jsx';
import Edit from './pages/Edit.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import { Routes, Route } from 'react-router-dom';
import { useReducer, createContext, useRef } from 'react';
import { mockData } from './utils/mock-data.js';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE': {
      return [...state, action.diary];
    }
    case 'DELETE': {
      return [...state].filter((item) => item.id !== action.id);
    }
    case 'UPDATE': {
      return [...state].map((item) => (item.id !== action.diary.id ? item : action.diary));
    }
  }
};
export const DiaryStateContext = createContext(); // 원시 타입 state 관리
export const DiaryDispatchContext = createContext(); // 참조형 타입 관리

function App() {
  const [diary, dispatch] = useReducer(reducer, mockData);
  const id = useRef(6); // 배열 렌더링에서 key로 사용할 id

  // 새 일기 만들기
  const handleCreate = (diary) => {
    dispatch({
      type: 'CREATE',
      diary: {
        id: id.current++,
        ...diary,
      },
    });
  };

  // 일기 삭제하기
  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  // 일기 수정
  const handleUpdate = (diary) => {
    dispatch({
      type: 'UPDATE',
      diary,
    });
  };

  return (
    <DiaryStateContext.Provider value={diary}>
      <DiaryDispatchContext.Provider value={{ handleCreate, handleDelete, handleUpdate }}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/edit/:id' element={<Edit />}></Route>
          <Route path='/new' element={<Edit />}></Route>
          <Route path='/details/:id' element={<Details />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
