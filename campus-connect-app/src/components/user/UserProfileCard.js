import React from 'react'
import { BrowserRouter as Router,Route, Routes, Link, Outlet } from "react-router-dom";

function UserProfileCard() {
  return (
    <div>UserProfileCard
      <br />
      <Link to='auth'>Login / logout</Link>
    </div>
  )
}

export default UserProfileCard