import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Googlebtn from './Components/Googlebtn';
import Mypage from './Pages/MyPage';
import Chart from './Components/Chart';
import MoneyInput from './Pages/MoneyInput';
import MoneyBook from './Pages/MoneyBook';
import PhotoInput from './Pages/PhotoInput';
import Board from './Pages/Board';
import WritePost from './Pages/WritePost';
import PostDetail from './Pages/PostDetail';
import NotFoundPage from './Pages/NotFound';
function App() { 

  return (
    <>
   <HashRouter >       
    <Routes>
      <Route path={"/NeatFin_front/"} element={<Login />}></Route> {/* 첫 시작 화면 login*/}
      <Route path={"/dashboard"} element={<Dashboard />}></Route> 
      <Route path={"/googlebtn"} element={<Googlebtn />}></Route> 
      <Route path={"/mypage"} element={<Mypage />}></Route> 
      <Route path={"/chart"} element={<Chart />}></Route> 
      <Route path={"/moneybook/moneyinput"} element={<MoneyInput />}></Route> 
      <Route path={"/moneybook/photoinput"} element={<PhotoInput />}></Route> 
      <Route path={"/moneybook"} element={<MoneyBook />}></Route> 
      <Route path={"/board"} element={<Board />}></Route> 
      <Route path={"/board/writepost"} element={<WritePost />}></Route> 
      <Route path={"/board/:postId"} element={<PostDetail />}></Route> 
      <Route path={"*"} element={<NotFoundPage />}></Route>

     </Routes>          
   </HashRouter>
    </>
  )
}

export default App;
