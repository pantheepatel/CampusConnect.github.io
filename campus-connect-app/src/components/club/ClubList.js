import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import axios from "axios"
import { clubData_ } from '../../services/clubService';// this import js file which we write logic of fetch api

function ClubList() {
  const [clubData, setClubData] = useState(null)  //store club data 

  useEffect(() => {
    clubData_().then(response => { setClubData(response.data["clubData"]); })//save response in clubdata
  }, [])

  return (
    <div>
      {
        clubData ? clubData.map((item) => {
          return (
            // here value is written write card components and add below values
            <>
            <h5>card name - {item["club_name"]}</h5>
            <h5>club_admin - {item["club_admin"]}</h5>
            <h5>club_date - {item["club_date"]}</h5>
            <h5>club_description - {item["club_description"]}</h5>
            <h5>club_mainStream - {item["club_name"]}</h5>
            <br/>           
            <br/>           
            <br/>           
            </>
          
          )
        }) : (<h1>No Club available</h1>)
      }

      <br />
      <Link to='/club/addClub'>Add Club</Link>
      <br />
      <Link to='/club/myClub'>My Club</Link>
      <Outlet />
    </div>
  )
}

export default ClubList