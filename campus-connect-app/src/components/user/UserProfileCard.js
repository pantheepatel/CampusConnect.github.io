import React from "react";
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios' // npm install axios
import EmailIcon from '@mui/icons-material/Email';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EditIcon from '@mui/icons-material/Edit';
import FeedIcon from '@mui/icons-material/Feed';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DomainIcon from '@mui/icons-material/Domain';

function UserProfileCard(props) {

  // let userProfile = {
  //   name: props.userName,
  //   email: props.userEmail,
  //   photo: props.userImage, // in navbar too, display in circle format.
  //   interest: props.userInterest,
  //   main_branch: "Law",
  //   insta: "www.instgram.com",
  //   linkedin: "www.linkedin.com",
  //   twitter: "www.twitter.com",
  // };
  // console.log("in profile")
  const [userProfile, setUser] = useState(null)



  useEffect(() => {// if local storage has data it remain as it is
    setUser(props.data)// so we set user info as 

  }, [props])


  const handleLogout = () => {//when we click log out userdata remove // localStorage.clear()
    setUser(null)
    localStorage.setItem("user_config", null)// also delete from localstorage to
    window.location.reload()
  }

  return (
    <>
      {
        (userProfile != null) ?

          <div className="container mt-5 " data-bs-theme="light">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4 d-flex flex-column align-items-center">

                        <img
                          src={userProfile.userImage}
                          alt="User Profile"
                          className="img-fluid rounded-circle"
                          style={{height:'80%',width:'80%'}}
                        />
                        <br />
                        <h2 className="mt-2"><strong>{userProfile.userName}</strong></h2>
                        <div>
                          <p><strong>Gender:</strong> {userProfile.userGender}</p>
                          <p><strong>ContactNo:</strong> {userProfile.userPhone}</p>
                          <p><strong>Join Date:</strong> {userProfile.userDate}</p>
                          <p><strong>Graduation Year:</strong>{userProfile.userGraduationYear}</p>

                        </div>
                        <div className='d-flex gap-6'>
                          {userProfile.insta ? (
                            <div>
                              <a
                                href={`//${userProfile.userInsta}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-decoration-none text-danger'
                              >
                                <InstagramIcon />
                              </a>
                            </div>
                          ) : ""}
                          {userProfile.linkedin ? (
                            <div>
                              <a
                                href={`//${userProfile.userLinkedin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-decoration-none text-primary'
                              >
                                <LinkedInIcon />
                              </a>
                            </div>
                          ) : ""}
                          {userProfile.portfolio ? (
                            <div>
                              <a
                                href={`//${userProfile.userPortfolio}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-decoration-none text-primary'
                              >
                                <ArrowForwardIcon />
                              </a>
                            </div>
                          ) : ""}
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="d-flex justify-content-end w-100">
                          {/* Add the "Edit Profile" link here */}
                          <a href="/edit-profile" className="btn btn-primary">
                            <EditIcon />
                          </a>
                        </div>
                        <p className='gap-2'><EmailIcon /> <strong>Email: </strong> {userProfile.userEmail}</p>
                        {/* <p><AccountBoxIcon /><strong>User_id:</strong>{userProfile.userId}</p> */}
                        <div className="mb-3 d-flex gap-2">
                          <AutoFixHighIcon /><strong>Interests:</strong>
                          {userProfile.userInterest}

                          {/* {userProfile.userInterest.map((interest, index) => (
                            <p key={index}><span className="badge bg-black "> {interest}</span></p>
                          ))} */}

                        </div>
                        <div >
                          <p><DomainIcon /><strong>Main Branch:</strong> {userProfile.userField}</p>
                        </div>
                        <br />
                        <div className='d-flex gap-2'>
                          <PsychologyAltIcon /><strong>Skill:</strong>
                          {userProfile.userSkill}
                          {/* {userProfile.userSkill.map((skill, index) => (
                            <p key={index}><span className="badge bg-black "> {skill}</span></p>
                          ))} */}

                        </div>
                        <br />
                        <div>
                          <FeedIcon /><strong>Bio:</strong>
                          <div className="bg-light p-2">{userProfile.userBio}</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-3" onClick={handleLogout}>
                      <button className="btn btn-danger">
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : <h2></h2>
      }


    </>
  );
}

export default UserProfileCard;






