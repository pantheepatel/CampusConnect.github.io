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
import EmailIcon from "@mui/icons-material/Email";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import img1 from "../../img1.webp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EditIcon from "@mui/icons-material/Edit";

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
  const [user, setUser] = useState(null)



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
        (user != null) ? <div className="container mt-5 " data-bs-theme="light">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 d-flex flex-column align-items-center">
                      <img
                        src={user.userImage}
                        alt="User Profile"
                        className="img-fluid rounded-circle"
                        style={{ height: "80%", width: "80%" }}
                      />

                      <br />
                      <h2 className="mt-2">
                        <strong>{user.userName}</strong>
                      </h2>
                      <div className="d-flex gap-6">
                        {user.userInsta ? (
                          <div>
                            <a
                              href={`//${user.userInsta}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none text-danger"
                            >
                              <InstagramIcon />
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                        {props.userLinkedin ? (
                          <div>
                            <a
                              href={`//${props.userLinkedin}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none text-primary"
                            >
                              <LinkedInIcon />
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                        {/* {userProfile.twitter ? (
                          <div>
                            <a
                              href={`//${userProfile.twitter}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-decoration-none text-primary"
                            >
                              <TwitterIcon />
                            </a>
                          </div>
                        ) : (
                          ""
                        )} */}
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="d-flex justify-content-end w-100">
                        {/* Add the "Edit Profile" link here */}
                        <Link to="editProfile" className="btn btn-primary" >
                          <EditIcon />
                        </Link>
                      </div>
                      <p>
                        <EmailIcon /> <strong>Email: </strong> {user.userEmail}
                      </p>
                      {/* <div className="mb-3">
                        <AutoFixHighIcon />
                        <strong>Interests:</strong>
                        <ul>
                          {userProfile.interest.map((interest, index) => (
                            <li key={index}>
                              <span className="badge bg-black"> {interest}</span>
                            </li>
                          ))}
                        </ul>
                      </div> */}
                      {/* <div>
                        <strong>Main Branch:</strong> {userProfile.main_branch}
                      </div> */}
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> : <h2></h2>
      }


    </>
  );
}

export default UserProfileCard;








