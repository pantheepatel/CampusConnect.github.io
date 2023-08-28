import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import EventList from '../components/event/EventList';

function Events() {
  return (
    <>
    <br />
    <Link to='/event/addEvent'>Add Event</Link>
    <br />
    <Link to='/event/myEvent'>MY events</Link>
    {/* make two button for this also */}
    <Outlet />
    <EventList></EventList>
    </>
    
  )
}

export default Events