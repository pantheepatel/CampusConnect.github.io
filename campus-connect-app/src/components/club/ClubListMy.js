
import React, { useEffect, useState } from 'react'
import { myClubData_ } from '../../services/clubService';// this import js file which we write logic of fetch api
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import ClubForm from './ClubForm';
import axios from 'axios';
import { Card, Row, Col, Container } from 'react-bootstrap';
// import Link from '@mui/icons-material/Link';

function ClubListMy() {
  const [myClubData, setMyClubData] = useState(null)  //store club data 
  const [open, setOpen] = useState(true)
  const [state, setState] = useState("myclub")
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    myClubData_().then(response => {
      setMyClubData(response.data["admin_clubs"]);
      console.log(myClubData)
      setOpen(false)
      setLoading(false)
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
    <div>
      <div className='pb-2 pt-10 px-32'>
        <h1 className='border-4 p-2 align-middle justify-center flex'>My Clubs</h1>
      </div>
      {
        state == "edit" && <ClubForm data={item} />
      }
      {
        loading ? <div>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={() => setOpen(false)}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </div> :
          <div>
            {
              state == "myclub" && (
                <>
                  {
                    myClubData.length ?
                      myClubData.map((item, index) => {
                        var userAdmin = (item['club_admin'] === JSON.parse(localStorage['user_config']).email)
                        return (
                          <>
                            <div className='px-32 py-3'>
                              <Card className='p-4'>
                                <div className='bg-slate-300 rounded-md'>
                                  <Row xs={1} md={2} className=''>
                                    <Col md={4} className='px-56 flex'>
                                      <img src={item['club_image']} alt="image not found" style={{ display: 'flex', maxWidth: '15rem', maxHeight: '18rem', alignSelf: 'center' }} />
                                    </Col>
                                    <Col md={8} className=''>
                                      <div className='px-6'>
                                        <div className='justify-between flex mb-6'>
                                          <h2>{item['club_name']}</h2>
                                          {
                                            item['club_website']
                                              ?
                                              <h6 className='align-bottom my-auto'><a href={`//${item['club_website']}`}>Your website</a></h6>
                                              :
                                              <span></span>
                                          }
                                        </div>
                                        <div className="justify-between flex mb-3">
                                          <span className="inline-block border-2 border-gray-400 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-3/5 truncate">{item['club_field']}</span>
                                          <span className="inline-block border-2 border-gray-400 bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item['club_date']}</span>
                                        </div>
                                        <div className='flex' dangerouslySetInnerHTML={{ __html: item['club_description'] }}>
                                          {/* {item['club_description']} */}
                                        </div>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                                {
                                  userAdmin ?
                                    <div className='mt-3'>
                                      <button className='btn btn-primary mr-4' onClick={() => { setItem(item); setState("edit"); }}>Edit</button>
                                      <button className='btn btn-danger' onClick={() => clubDelete(index)}>delete</button>
                                    </div>
                                    :
                                    <div></div>
                                }
                              </Card>
                            </div>

                          </>

                        )
                      })
                      :
                      <div>no clubs available for this user, please add clubs to see here</div>
                  }
                </>
              )
            }
          </div>
      }
    </div>
  )
}
export default ClubListMy