import React from 'react'
import { BrowserRouter as Router,Route, Routes, Link, Outlet } from "react-router-dom";
import EventForm from './EventForm'

function EventList() {
  return (
    <div>
      EventList
      <br />
      <Link to='/event/addEvent'>Add Event</Link>
      <br />
      <Link to='/event/myEvent'>My Event</Link>
      <Outlet/>
    </div>
  )
}

export default EventList