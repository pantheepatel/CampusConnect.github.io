import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import EventList from '../event/EventList';
import ClubList from '../club/ClubList';
import Button from '../common/Button';
import EventForm from '../event/EventForm';
import ClubForm from '../club/ClubForm';

function Header() {
  return (
    <div>
      <Link to="/">Home</Link> &nspb;
      <Link to="event">Event</Link>&nspb;
      <Link to="club">Club</Link>
    </div>
  )
}

export default Header