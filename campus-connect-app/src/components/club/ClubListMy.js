
import React, { useEffect, useState } from 'react'
import { myClubData_ } from '../../services/clubService';// this import js file which we write logic of fetch api
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import ClubForm from './ClubForm';
import axios from 'axios';

function ClubListMy() {
  const [myClubData, setMyClubData] = useState(null)  //store club data 
  const [open, setOpen] = useState(true)
  const [state, setState] = useState("myclub")
  const [item, setItem] = useState({})

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
    }).then(response => window.location.replace('/club'))
  }

  return (
    <>
      {
        state == "edit" && <ClubForm data={item} />
      }
      {
        state == "myclub" && (<>
          {
            myClubData ?
              myClubData.map((item, index) => {
                var userAdmin = (item['club_admin'] === JSON.parse(localStorage['user_config']).email)
                return (
                  // here value is written write card components and add below values
                  <>
                    {console.log('admin : ', item['club_admin'])}
                    {console.log('loggedin : ', JSON.parse(localStorage['user_config']).email)}
                    {console.log('user admin, ', userAdmin)}

                    <div class="ml-2  p-1 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item['club_image']} alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item['club_name']}</h5>
                          <p class="mb-3 font-normal text-gray-700">{item['club_description']}</p>
                        </div>
                    </div>
                    <h5>club_admin - {item["club_admin"]}</h5>
                    <h5>club_date - {item["club_date"]}</h5>
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
              })
              :
              <div>no clubs available</div>
            // state ? <ClubForm data={myClubData[state]} /> : (<>
            //   {(!open && myClubData.length === 0) ? (<h1>No clubs available</h1>) : null}
            //   {
            //     : <Backdrop
            //     sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            //     open={open}
            //     onClick={() => setOpen(false)}>
            //     <CircularProgress color="inherit" />
            //   </Backdrop>
            //   }
            // </>)
          }
        </>)
      }
    </>
  )
}
export default ClubListMy