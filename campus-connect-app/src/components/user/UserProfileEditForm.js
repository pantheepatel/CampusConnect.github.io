import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";

function UserProfileEditForm() {
  const [branch, setBrach] = useState('')
  // function http_user(e) {
  //   e.preventDefault()
  //   if (props.data) {
  //     axios.get("http://127.0.0.1:8000/club_edit", { // call api request to backend to store club data
  //       params: {
  //         user:localStorage.getItem('email'),
  //         user_field: clubName,
  //         club_description: clubDescription,
  //         club_date: clubDate,
  //       }
  //     })
  //       .then(response => {
  //         setStatus(true);
  //         setClubName("")
  //         setClubDescription("")
  //         setClubDate("")
  //         setClubWebsite("")
  //         setClubField("")
  //         setClubImage("")
  //       })
  //       .catch(error => console.log(error))
  //   }
  //   else {
  //     axios.get("http://127.0.0.1:8000/club_add", { // call api request to backend to store club data
  //       params: {
  //         club_name: clubName,
  //         club_description: clubDescription,
  //         club_date: clubDate,
  //         club_admin: JSON.parse(localStorage.getItem("user_config"))["email"], //we use json.parse bcoz in our localstorage data in string
  //         club_website: clubWebsite,
  //         club_field: clubField,
  //         club_image: clubImage,
  //       }
  //     })
  //       .then(response => {
  //         setStatus(true);
  //         setClubName("")
  //         setClubDescription("")
  //         setClubDate("")
  //         setClubWebsite("")
  //         setClubField("")
  //         setClubImage("")
  //       })
  //       .catch(error => console.log(error))
  //   }
  // }

  // useEffect(() => {
  //   if (props.data) {
  //     setClubId(props.data.id)
  //     setClubName(props.data.club_name)
  //     setClubDescription(props.data.club_description)
  //     setClubDate(props.data.club_date)
  //     setClubWebsite(props.data.club_website)
  //     setClubField(props.data.club_field)
  //     setClubImage(props.data.club_image)
  //   }
  // }, [])

  // const mainFields=['Eng','Law','phy','other']
  // return (
  //   <>
  //     {status && <div class="alert alert-success alert-dismissible fade show" role="alert">
  //       Club data stored successfully
  //       <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  //         <span aria-hidden="true" onClick={() => setStatus(false)}>&times;</span>
  //         <Link aria-hidden="true" to="/club">Back to clubs;</Link>
  //       </button>
  //     </div>}

  //     <div className='container mt-10'>
  //       <form className="row g-3" onSubmit={http_user}>
  //         <div className="col-md-12">
  //           <label for="inputName" className="form-label">Club Name</label>
  //           <input required type="text" className="form-control" id="inputName" value={clubName} onChange={(e) => setClubName(e.target.value)} />
  //         </div>

  //         <div className="col-12">
  //           <label for="inputDescription" className="form-label">Description</label>
  //           <input required type="text" className="form-control" id="inputDescription" placeholder="1234 Main St" value={clubDescription} onChange={(e) => setClubDescription(e.target.value)} />
  //         </div>

  //         <div className="col-md-6">
  //           <label for="inputDate" className="form-label">Start Date</label>
  //           <input required type="date" className="form-control" id="inputDate" value={clubDate} onChange={(e) => setClubDate(e.target.value)} />
  //         </div>

  //         <div className="col-md-6">
  //           <label for="inputImgURL" className="form-label">Insert URL for Club Photo</label>
  //           <input type="url" className="form-control" id="inputImgURL" onChange={(e) => setClubImage(e.target.value)} />
  //         </div>

  //         <div className="col-md-6">
  //           <label for="inputClubURL" className="form-label">Enter club URL</label>
  //           <input type="url" className="form-control" id="inputClubURL" onChange={(e) => setClubWebsite(e.target.value)} />
  //         </div>

  //         <div className="col-md-6">
  //           <label for="inputClubStream" className="form-label">Main stream</label>
  //           <select name="inputClubStream" id="inputClubStream" className="form-control" onChange={(e) => setClubField(e.target.value)} >
  //             {
  //               mainFields.map((field)=>{
  //                 return(
  //                 <option value={field} key={field}>{field}</option>
  //                 )
  //               })
  //             }
  //           </select>
  //         </div>

  //         <div className="col-12">
  //           <button required type="submit" className="btn btn-primary">{props.data ? "Edit" : "Save"}</button>
  //         </div>

  //       </form>
  //     </div>

  //   </>
  // )
}

export default UserProfileEditForm