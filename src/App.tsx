import { Routes, Route } from 'react-router-dom';
import Home from 'components/home';
import UserList from 'components/userList';
import './App.css';
import * as S from './Styled';

const App = () => (
  <div className="App">
    <S.title>User configuration</S.title>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<UserList />} />
    </Routes>
  </div>
);

export default App;
