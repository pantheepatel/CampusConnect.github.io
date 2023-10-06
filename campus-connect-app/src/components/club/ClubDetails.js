import React, { useEffect, useState } from 'react';
import { clubDetail } from '../../services/clubService';// this import js file which we write logic of fetch api
import { useParams } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { Link } from 'react-router-dom';

function ClubDetails() {

  const [clubData, setClubData] = useState(null)
  // const [image,setImage]=useState()
  const [loading, setLoading] = useState(true)
  // useParams to get the parameteres of url
  const params = useParams();
  console.log('use params id is : ', params.id)
  // when we get the data of specific id plant it will be set to plantData string
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/club_details", {
      params: {
        club_id: params.id,
      }
    }).then(response => {
      console.log(response.data)
      setClubData(response.data)
      setLoading(false)
    }).catch(error => console.log(error))
    // async function fetchData() {
    //   await clubDetail(params.id)
    //     .then(response => {
    //       setClubData(response.data['plantDetails'][0]);
    //       setLoading(false)
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // }
    // fetchData()

  }, [params]);
  return (
    <>
      {
        loading ?
          <div>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
              <CircularProgress color="inherit" />
            </Backdrop>
          </div>
          :
          <div>
            <div className='px-32 py-3'>
              <Card className='p-4'>
                <div className='bg-slate-300 rounded-md'>
                  <Row xs={1} md={2} className=''>
                    <Col md={4} className='px-56 flex'>
                      <img src={clubData['club_image']} alt="image not found" style={{ display: 'flex', maxWidth: '15rem', maxHeight: '18rem', alignSelf: 'center' }} />
                    </Col>
                    <Col md={8} className=''>
                      <div className='px-6'>
                        <div className='justify-between flex mb-6'>
                          <h2>{clubData['club_name']}</h2>
                          <span className='align-bottom my-auto'>{clubData['club_admin']}</span>
                          {
                            clubData['club_website']
                              ?
                              <h6 className='align-bottom my-auto'><a href={`//${clubData['club_website']}`}>Website</a></h6>
                              :
                              <span></span>
                          }
                        </div>
                        <div className="justify-between flex mb-3">
                          <span className="inline-block border-2 border-gray-400 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-3/5 truncate">{clubData['club_field']}</span>
                          <span className="inline-block border-2 border-gray-400 bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{clubData['club_date']}</span>
                        </div>
                        <div className='flex'>
                          {/* <div className='flex' dangerouslySetInnerHTML={{ __html: clubData['club_description'] }}> */}
                          {clubData['club_description']}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>

                {
                  // var userAdmin = ();

                  clubData['club_admin'] === JSON.parse(localStorage['user_config']).email ?
                    <div className='mt-3'>
                      <Link to='/club/myClub'>
                        <button className='btn btn-primary'>Goto this club</button>
                      </Link>
                    </div>
                    :
                    <div></div>
                }
              </Card>
            </div>
          </div>
      }
    </>
  )
}

export default ClubDetails