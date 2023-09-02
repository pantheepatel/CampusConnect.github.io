import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router,Route, Routes, Link, Outlet } from "react-router-dom";

function ClubForm(props) {
  const [clubName, setClubName] = useState("")
  const [clubDescription, setClubDescription] = useState("")
  const [clubDate, setClubDate] = useState("")
  const [clubId, setClubId] = useState("")
  const [status, setStatus] = useState(false)

  function http_club(e) {
    e.preventDefault()
    if(props.data){
      axios.get("http://127.0.0.1:8000/club_edit", { // call api request to backend to store club data
      params: {
        club_name: clubName,
        club_description: clubDescription,
        club_date: clubDate,
        club_admin: JSON.parse(localStorage.getItem("user_config"))["email"],
        id: clubId//we use json.parse bcoz in our localstorage data in string
      }
    })
      .then(response => {
        setStatus(true);
        setClubName("")
        setClubDescription("")
        setClubDate("")
      })
      .catch(error => console.log(error))
    }else{
      axios.get("http://127.0.0.1:8000/club_add", { // call api request to backend to store club data
      params: {
        club_name: clubName,
        club_description: clubDescription,
        club_date: clubDate,
        club_admin: JSON.parse(localStorage.getItem("user_config"))["email"] //we use json.parse bcoz in our localstorage data in string
      }
    })
      .then(response => {
        setStatus(true);
        setClubName("")
        setClubDescription("")
        setClubDate("")
      })
      .catch(error => console.log(error))
    }
  }

  useEffect(() =>{
    if(props.data){
      setClubName(props.data.club_name)
      setClubDescription(props.data.club_description)
      setClubDate(props.data.club_date)
      setClubId(props.data.id)
    }
  }, [])

  return (
    <>
      {status && <div class="alert alert-success alert-dismissible fade show" role="alert">
        Club data stored successfully
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true" onClick={() => setStatus(false)}>&times;</span>
          <Link aria-hidden="true" to="/club">Back to clubs;</Link>
        </button>
      </div>}

      <div className='container mt-10'>
        <form className="row g-3" onSubmit={http_club}>
          <div className="col-md-12">
            <label for="inputName" className="form-label">Club Name</label>
            <input type="text" className="form-control" id="inputName" onChange={(e) => setClubName(e.target.value)} value={clubName} />
          </div>

          <div className="col-12">
            <label for="inputDescription" className="form-label">Description</label>
            <input type="text" className="form-control" id="inputDescription" placeholder="1234 Main St" value={clubDescription} onChange={(e) => setClubDescription(e.target.value)} />
          </div>

          <div className="col-md-6">
            <label for="inputDate" className="form-label">Start Date</label>
            <input type="date" className="form-control" id="inputDate" value={clubDate} onChange={(e) => setClubDate(e.target.value)} />
          </div>

          <div className="col-md-6">
            <label for="inputDate" className="form-label">Upload Event Photo</label>
            <input type="file" className="form-control" id="inputDate" onChange={(e) => setClubDate(e.target.value)} />
          </div>


          <div className="col-12">
            <button type="submit" className="btn btn-primary">{props.data ? "Edit" : "Save"}</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default ClubForm