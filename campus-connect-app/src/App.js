import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Button from './components/common/Button';
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import EventList from './components/event/EventList';
import ClubList from './components/club/ClubList';
import EventForm from './components/event/EventForm';
import ClubForm from './components/club/ClubForm';
import UserProfileCard from './components/user/UserProfileCard';
import Auth from './components/Auth';
import Home from './pages/Home';
import Events from './pages/Events';
import Clubs from './pages/Clubs';
import UserProfile from './pages/UserProfile';
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='event'>
            <Route path='' element={<Events />}></Route>
            <Route path='addEvent' element={<EventForm />} />
            <Route path='myEvent' element={<EventList />} />
          </Route>
          <Route path='club'>
            <Route path='' element={<Clubs />}></Route>
            <Route path='addClub' element={<ClubForm />} />
            <Route path='myClub' element={<ClubList />} />
          </Route>
          <Route path='profile'>
            <Route path='' element={<UserProfile />}></Route>
            <Route path='auth' element={<Auth />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
