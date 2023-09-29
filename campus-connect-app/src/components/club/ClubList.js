import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { clubData_ } from '../../services/clubService';// this import js file which we write logic of fetch api
import ClubCard from './ClubCard';
import { Container, Row } from 'react-bootstrap';

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
    <div className='p-4'>
      {/* {console.log(clubData)} */}
      {/* <Container> */}

      {(!open && clubData.length === 1) ? (<h1>No clubs available</h1>) : null}
      <Row xs={1} md={2} lg={3}>
        {
          clubData && clubData.length > 1 ? clubData.map((item) => {
            if (item['club_name']) {
              return (
                <ClubCard name={item['club_name']} description={item["club_description"]} image={item["club_image"]} website={item["club_website"]} team={item["club_team"]} admin={item["club_admin"]} date={item["club_date"]} field={item["club_field"]}></ClubCard>
              )
            }
          }) :
            <div></div>
        }
      </Row>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={() => setOpen(false)}>
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* </Container> */}
    </div>
  )
}

export default ClubList