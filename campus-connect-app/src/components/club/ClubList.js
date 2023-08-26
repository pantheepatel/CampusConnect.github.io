import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import axios from "axios"

function ClubList() {
  const [clubData, setClubData] = useState(null)  //store club data 

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/club_list", { //make a null request and get data response
      params: {
        temp: null
      }
    }).then(response => { setClubData(response.data["clubData"]); })//save response in clubdata
  }, [])

  return (
    <div>
      {
        clubData ? clubData.map((item) => {
          return (<h1>{item["club_name"]}</h1>)
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