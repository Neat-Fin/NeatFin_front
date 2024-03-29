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
      <Route path='/' element={<Login />}></Route> {/* 첫 시작 화면 login*/}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/googlebtn" element={<Googlebtn />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/chart" element={<Chart />} />
      <Route path="/moneybook/moneyinput" element={<MoneyInput />} />
      <Route path="/moneybook/photoinput" element={<PhotoInput />} />
      <Route path="/moneybook" element={<MoneyBook />} />
      <Route path="/board" element={<Board />} />
      <Route path="/board/writepost" element={<WritePost />} />
      <Route path="/board/:postId" element={<PostDetail />} />
      <Route path="*" element={<NotFoundPage />} />
     </Routes>          
   </HashRouter>
    </>
  )
}

export default App;
