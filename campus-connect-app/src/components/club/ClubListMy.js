
import React, { useEffect, useState } from 'react'
import { myClubData_ } from '../../services/clubService';// this import js file which we write logic of fetch api
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import ClubForm from './ClubForm';
import axios from 'axios';

function ClubListMy() {
  const [myClubData, setMyClubData] = useState(null)  //store club data 
  const [open, setOpen] = useState(true)
  const [state, setState] = useState("")

  useEffect(() => {
    myClubData_().then(response => {
      setMyClubData(response.data["admin_clubs"]);
      setOpen(false)
    })//save response in clubdata
  }, [])

  function clubDelete(index) {
    axios.get("http://127.0.0.1:8000/club_delete", {
      params:
      {
        id: myClubData[index]['id']
      }
    }).then(response => window.location.replace('/myClub'))
  }

  return (
    <>
      {
        state ? <ClubForm data={myClubData[state]} /> : (<>
          {(!open && myClubData.length === 0) ? (<h1>No clubs available</h1>) : null}
          {
            myClubData ? myClubData.map((item, index) => {
              var userAdmin = (item['club_admin'] === JSON.parse(localStorage['user_config']).email)
              return (
                // here value is written write card components and add below values
                <>
                  {console.log('admin : ', item['club_admin'])}
                  {console.log('loggedin : ', JSON.parse(localStorage['user_config']).email)}
                  {console.log('user admin, ', userAdmin)}
                  <h5>card name - {item["club_name"]}</h5>
                  <h5>club_admin - {item["club_admin"]}</h5>
                  <h5>club_date - {item["club_date"]}</h5>
                  <h5>club_description - {item["club_description"]}</h5>
                  <h5>club_mainStream - {item["club_name"]}</h5>
                  {
                    userAdmin ?
                      <div>
                        <button className='btn btn-primary' onClick={() => setState(index)}>Edit</button>
                        <button className='btn btn-danger' onClick={() => clubDelete(index)}>delete</button>
                      </div>
                      :
                      <div></div>
                  }
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
        </>)
      }
    </>
  )
}
export default ClubListMy