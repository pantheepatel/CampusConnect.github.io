import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import ClubList from '../components/club/ClubList';
import Header from '../components/common/Header';
import { Alert, Button } from 'react-bootstrap';

function Clubs() {
  var isLoggedIn = false
  if (localStorage['user_config'] != 'null') {
    isLoggedIn = true
  }

  console.log('is user user_config?', localStorage)
  console.log('is user?', isLoggedIn)

  const [show, setShow] = useState(true);
  return (
    <>
      {
        isLoggedIn ?
          <div className='pt-3 px-5 mt-24'>
            <Link to='addClub'>
              <Button className='mx-2'>Add Club</Button>
            </Link>
            <Link to='myClub'>
              <Button className='mx-2'>My Club</Button>
            </Link>
          </div>
          :
          <div className='mt-24'>
            <Alert variant="success" className='mx-20 mt-3' onClose={() => setShow(false)} dismissible>
              <h6>login to get add and my club features!</h6>
            </Alert>
          </div>
      }
      <ClubList></ClubList>
      <Outlet />
    </>
  )
}

export default Clubs