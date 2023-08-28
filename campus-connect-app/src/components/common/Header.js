import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter } from "react-router-dom";
// import EventList from '../event/EventList';
// import ClubList from '../club/ClubList';
// import Button from '../common/Button';
// import EventForm from '../event/EventForm';
// import ClubForm from '../club/ClubForm';
// import Auth from '../Auth';
// import UserProfileCard from '../user/UserProfileCard';

function Header() {
  return (
    <div className='flex bg-cyan-200 justify-around'>
      <div>Logo</div>
      <div className='flex justify-between w-1/4'>
        <Link to="/">Home</Link>
        <Link to="event">Event</Link>
        <Link to="club">Club</Link></div>
      <div>
        <Link to="profile"> Profile / login </Link>
        {/* <Auth /> */}
      </div>
    </div>
  )
}

export default Header