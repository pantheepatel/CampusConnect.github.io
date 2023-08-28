import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Button from './components/common/Button';
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import EventList from './components/event/EventList';
import ClubList from './components/club/ClubList';
import ClubListMy from './components/club/ClubListMy';
import EventForm from './components/event/EventForm';
import EventListMy from './components/event/EventListMy'
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
            <Route path='' element={<Events />}/>
            <Route path='addEvent' element={<EventForm />} />
            <Route path='myEvent' element={<EventListMy />} />
          </Route>
          <Route path='club'>
            <Route path='' element={<Clubs />}/>
            <Route path='addClub' element={<ClubForm />} />
            <Route path='myClub' element={<ClubListMy />} />
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
