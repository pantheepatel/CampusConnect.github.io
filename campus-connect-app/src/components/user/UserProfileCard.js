import React from 'react'
import { BrowserRouter as Router,Route, Routes, Link, Outlet } from "react-router-dom";

function UserProfileCard() {
  let userProfile=[
    {
      name:'xyz',
      email:'xyz@gmail.com',
      photo:'image', // in navbar too, display in circle format.
      interest:['abc','pqr','hao']
    }
  ]
  return (
    <div>UserProfileCard
      <br />
      <Link to='auth'>Login / logout</Link>
    </div>
  )
}

export default UserProfileCard