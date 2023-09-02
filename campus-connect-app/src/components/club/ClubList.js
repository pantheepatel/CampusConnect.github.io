import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
// import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography, CardHeader } from '@mui/material';
import { clubData_ } from '../../services/clubService';// this import js file which we write logic of fetch api
import ClubCard from './ClubCard';
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
      <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start" padding={5}>

        {(!open && clubData.length === 0) ? (<h1>No clubs available</h1>) : null}
        {
          clubData ? clubData.map((item, index) => {
            return (
              // here value is written write card components and add below values
              <>
                {/* <h5>card name - {item["club_name"]}</h5>
              <h5>club_admin - {item["club_admin"]}</h5>
              <h5>club_date - {item["club_date"]}</h5>
              <h5>club_description - {item["club_description"]}</h5>
              <h5>club_mainStream - {item["club_name"]}</h5>
              <br />
              <br />
              <br /> */}
                {/* <ClubCard name={item["club_name"]} admin={item["club_admin"]} date={item["club_date"]} description={item["club_description"]} mainStream={item["club_mainStream"]}>

              </ClubCard> */}
                {/* {console.log(index)} */}
                {/* <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start"> */}
                {console.log(index)}
                <Grid item xs={12} sm={6} md={4} key={index} padding={2}>
                  <ClubCard name={item["club_name"]} admin={item["club_admin"]} date={item["club_date"]} description={item["club_description"]} mainStream={item["club_mainStream"]}>
                    {/* clubData.append({club_id}:clubId) */}
                  </ClubCard>
                </Grid>
                {/* </Grid> */}
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
      </Grid>
    </div>
  )
}

export default ClubList