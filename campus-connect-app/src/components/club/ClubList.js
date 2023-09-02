import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { clubData_ } from '../../services/clubService';// this import js file which we write logic of fetch api

function ClubList() {
  const [clubData, setClubData] = useState(null)  //store club data 
  const [open, setOpen] = useState(true)

  useEffect(() => {
    clubData_().then(response => {
      setClubData(response.data["clubData"]);
      setOpen(false)
    })//save response in clubdata
  }, [])

  return (
    <div>
      {console.log(clubData)}
      {(!open && clubData.length === 1) ? (<h1>No clubs available</h1>) : null}
      {
        clubData && clubData.length > 1 ? clubData.map((item) => {
          return (
            // here value is written write card components and add below values
            <>
              <h5>card name - {item &&item["club_name"]}</h5>
              <h5>club_admin - {item && item["club_admin"]}</h5>
              <h5>club_date - {item && item["club_date"]}</h5>
              <h5>club_description - {item && item["club_description"]}</h5>
              <h5>club_mainStream - {item && item["club_name"]}</h5>
              <br />
              <br />
              <br />
            </>

          )
        }) : <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={() => setOpen(false)}>
          <CircularProgress color="inherit" />
        </Backdrop>
      }

      {/* <br />
      <Link to='/club/addClub'>Add Club</Link>
      <br />
      <Link to='/club/myClub'>My Club</Link>
      <Outlet /> */}
    </div>
  )
}

export default ClubList