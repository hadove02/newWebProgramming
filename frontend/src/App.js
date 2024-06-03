import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import Main from './component/Main';
import Login from './component/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
