import React from "react";
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
function UserProfileCard() {
  let userProfile = {
    name: "xyz",
    email: "xyz@gmail.com",
    photo: img1, // in navbar too, display in circle format.
    interest: ["abc", "pqr", "hao"],
    main_branch: "Law",
    insta: "www.instgram.com",
    linkedin: "www.linkedin.com",
    twitter: "www.twitter.com",
  };

  return (
    <>
      <div className="container mt-5 " data-bs-theme="light">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 d-flex flex-column align-items-center">
                    <img
                      src={userProfile.photo}
                      alt="User Profile"
                      className="img-fluid rounded-circle"
                      style={{ height: "80%", width: "80%" }}
                    />

                    <br />
                    <h2 className="mt-2">
                      <strong>{userProfile.name}</strong>
                    </h2>
                    <div className="d-flex gap-6">
                      {userProfile.insta ? (
                        <div>
                          <a
                            href={`//${userProfile.insta}`}
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
                      {userProfile.linkedin ? (
                        <div>
                          <a
                            href={`//${userProfile.linkedin}`}
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
                      {userProfile.twitter ? (
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
                      )}
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="d-flex justify-content-end w-100">
                      {/* Add the "Edit Profile" link here */}
                      <a href="/edit-profile" className="btn btn-primary">
                        <EditIcon />
                      </a>
                    </div>
                    <p>
                      <EmailIcon /> <strong>Email: </strong> {userProfile.email}
                    </p>
                    <div className="mb-3">
                      <AutoFixHighIcon />
                      <strong>Interests:</strong>
                      <ul>
                        {userProfile.interest.map((interest, index) => (
                          <li key={index}>
                            <span className="badge bg-black"> {interest}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <strong>Main Branch:</strong> {userProfile.main_branch}
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <button className="btn btn-danger">Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfileCard;
