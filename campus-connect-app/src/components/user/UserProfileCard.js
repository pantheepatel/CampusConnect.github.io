import React from 'react'
import { BrowserRouter as Router,Route, Routes, Link, Outlet } from "react-router-dom";

function UserProfileCard() {
  let userProfile=[
    {
      name:'xyz',
      email:'xyz@gmail.com',
      photo:'image', // in navbar too, display in circle format.
      interest:['abc','pqr','hao'],
      main_branch:'Law',
      bio: 'student and researcher',
      link_insta:'url:insta',
      link_linkedIn:'url:linkedIn',
    }
  ]
  return (
    <div>UserProfileCard
      <br />
      {/* <Link to='auth'>Login / logout</Link> */} 
      {/* add this login button into the user profile page not in this component. */}
    </div>
  )
}

export default UserProfileCard