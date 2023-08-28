import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import ClubList from '../components/club/ClubList';
import Header from '../components/common/Header';


function Clubs() {
  return (
    <>
    
    <br />
    <Link to='/club/addClub'>Add Club</Link>  
   <br />
    <Link to='/club/myClub'>My Club</Link>
    {/* make two button for this also */}
    <Outlet />
    <ClubList></ClubList>


    </>
    
  )
}

export default Clubs