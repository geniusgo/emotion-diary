import './App.css';
import Details from './pages/Details';
import Edit from './pages/Edit';
import Home from './pages/Home';
import New from './pages/New';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import { useReducer, createContext, useRef } from 'react';
import { mockData } from './utils/mock-data.js';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE': {
      return [...state, action.diary];
    }
  }
};

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [diary, dispatch] = useReducer(reducer, mockData);
  const id = useRef(5);

  // 새 일기 만들기
  const onCreate = (e) => {
    dispatch({
      type: 'CREATE',
      diary: {
        id: id.current++,
        diaryDate: new Date().getTime(),
        content: e.target.textContent, // 나중에 실제 데이터 보면서 수정 필요
        emotionId: e.target.textContent, // 나중에 실제 데이터 보면서 수정 필요
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={diary}>
      <DiaryDispatchContext.Provider value={onCreate}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/edit/:id' element={<Edit />}></Route>
          <Route path='/new/:id' element={<New />}></Route>
          <Route path='/details/:id' element={<Details />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;