import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import EventList from '../event/EventList';
import ClubList from '../club/ClubList';
import Button from '../common/Button';
import EventForm from '../event/EventForm';
import ClubForm from '../club/ClubForm';

function Header() {
  return (
    <div className="flex flex-row gap-9 justify-around p-2 bg-pink-200 ">
      <div>Logo</div>
      <div className="flex gap-5">
        <Link to="/" className='no-underline'>Home</Link>
        <Link to="event" className='no-underline'>Event</Link>
        <Link to="club" className='no-underline'>Club</Link>
      </div>
      <div>Profile or Login</div>
    </div>
  )
}

export default Header