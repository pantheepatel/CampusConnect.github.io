
import React, { useEffect, useState } from 'react' 
import { myClubData_ } from '../../services/clubService';// this import js file which we write logic of fetch api
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

function ClubListMy() {
  const [myClubData, setMyClubData] = useState(null)  //store club data 
  const [open, setOpen] = useState(true)

  useEffect(() => {
    myClubData_().then(response => {
      setMyClubData(response.data["admin_clubs"]);
      console.log(myClubData)
      setOpen(false)
    })//save response in clubdata
  }, [])

  return (
    <>
      {(!open && myClubData.length===0) ? (<h1>No clubs available</h1>) : null}
      {
        myClubData ? myClubData.map((item) => {
          return (
            // here value is written write card components and add below values
            <>
              <h5>card name - {item["club_name"]}</h5>
              <h5>club_admin - {item["club_admin"]}</h5>
              <h5>club_date - {item["club_date"]}</h5>
              <h5>club_description - {item["club_description"]}</h5>
              <h5>club_mainStream - {item["club_name"]}</h5>
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
    </>
  )
}
export default ClubListMy