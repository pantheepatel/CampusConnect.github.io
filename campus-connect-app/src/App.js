import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Button from './components/common/Button';
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import EventList from './components/event/EventList';
import ClubList from './components/club/ClubList';
import EventForm from './components/event/EventForm';
import ClubForm from './components/club/ClubForm';
import ClubListMy from './components/club/ClubListMy';
import EventListMy from './components/event/EventListMy';
function App() {

  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Button />} />
          <Route path='event' >
            <Route path='' element={<EventList />} />
            <Route path='addEvent' element={<EventForm />} />
            <Route path='myEvent' element={<EventList />} />
          </Route>
          <Route path='club' >
            <Route path='' element={<ClubList />} />
            <Route path='addClub' element={<ClubForm />} />
            <Route path='myClub' element={<ClubList />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
