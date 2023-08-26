import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

// function get_url(){
//   var someurl=window.location.pathname()
//   return someurl
// }

function ClubList(props) {
  // if(get_url=='/club'){
  //   console.log('checked that this is /club')
  // }
  // else if(get_url=='/club/myClub'){
  //   console.log('checked that this is /club/myClub')
  // }

  // console.log(window.location.pathname);
  return (
    <div>
      ClubList
      <br />
      <Link to='/club/addClub'>Add Club</Link>
      <br />
      <Link to='/club/myClub'>My Club</Link>
      <Outlet />

    </div>
  )
}

export default ClubList