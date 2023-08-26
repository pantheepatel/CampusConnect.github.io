import React, { useState } from 'react'
import axios from 'axios'

function ClubForm() {
  const [clubName, setClubName] = useState("")
  const [clubDescription, setClubDescription] = useState("")
  const [clubDate, setClubDate] = useState("")
  const [status, setStatus] = useState(false)

  function http_club(e){
    e.preventDefault()
    axios.get("http://127.0.0.1:8000/club_add", { // call api request to backend to store club data
      params: {
        club_name: clubName,
        club_description: clubDescription,
        club_date: clubDate,
        club_admin: JSON.parse(localStorage.getItem("user_config"))["email"] //we use json.parse bcoz in our localstorage data in string
      }
    })
      .then(response => setStatus(true))
      .catch(error => console.log(error))
  }

  return (
    <>
    {status && (<h1>Club added</h1>)}
      <div className='container mt-10'>
        <form className="row g-3" onSubmit={http_club}>
          <div className="col-md-12">
            <label for="inputName" className="form-label">Club Name</label>
            <input type="text" className="form-control" id="inputName" onChange={(e) => setClubName(e.target.value)}/>
          </div>

          <div className="col-12">
            <label for="inputDescription" className="form-label">Description</label>
            <input type="text" className="form-control" id="inputDescription" placeholder="1234 Main St" onChange={(e) => setClubDescription(e.target.value)} />
          </div>

          <div className="col-md-6">
            <label for="inputDate" className="form-label">Start Date</label>
            <input type="date" className="form-control" id="inputDate" onChange={(e) => setClubDate(e.target.value)} />
          </div>


          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default ClubForm