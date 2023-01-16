import './App.css';
import TopBar from './components/topbar/TopBar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Single from './pages/single/Single';


function App() {
  const user = false;
  return (
    <Router>
      <TopBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/register' element={user ? <Home/> : <Register/>}/>
        <Route exact path='/login' element={user ? <Home/> : <Login/>}/>
        <Route exact path='/write' element={user ? <Write/> : <Register/>}/>
        <Route exact path='/settings' element={user ? <Settings/> : <Register/>}/>
        <Route exact path='/post/:postId' element={<Single/>}/>
      </Routes>
      
    </Router>
    
  );
}

export default App;
