
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import axios from "axios"
import { clubData_ } from '../../services/clubService';// this import js file which we write logic of fetch api


function ClubListMy() {
  const [myClubData, setMyClubData] = useState(null)  //store club data 

  useEffect(() => {
    clubData_().then(response => { setMyClubData(response.data["myClubData"]); })//save response in clubdata
  }, [])
  let currentUser=JSON.parse(localStorage.getItem("user_config"))["email"]
  console.log(currentUser)





  return (
    <div>{currentUser}</div>
  )
}

export default ClubListMy