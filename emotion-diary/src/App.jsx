import './App.css';
import Details from './pages/Details';
import Edit from './pages/Edit';
import Home from './pages/Home';
import New from './pages/New';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/edit/:id' element={<Edit />}></Route>
      <Route path='/new/:id' element={<New />}></Route>
      <Route path='/details/:id' element={<Details />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
