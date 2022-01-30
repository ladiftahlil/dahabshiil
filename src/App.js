import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboar from './pages/Dashboard';
import Register from './pages/Register';
import Query from './pages/Query';
import Profile from './pages/Profile';
import User from './pages/User';
import data from './utils/data'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar userimg={data.user.img} username={data.user.name}/>
        <div className="page">
          <div className="sidebar"><Sidebar /></div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboar />} />
              <Route path="/register" element={<Register />} />
              <Route path="/query" element={<Query />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
