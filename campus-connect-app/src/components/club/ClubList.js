import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

function ClubList() {
  return (
    <div>
      ClubList
      <br />
      <Link to='/club/addClub'>Add Club</Link>
      <br />
      <Link to='/club/myClub'>My Club</Link>
      <Outlet/>
    </div>
  )
}

export default ClubList