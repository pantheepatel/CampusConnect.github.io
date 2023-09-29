import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";

function ClubForm(props) {
  const [clubId, setClubId] = useState("")
  const [clubName, setClubName] = useState("")
  const [clubDescription, setClubDescription] = useState("")
  const [clubDate, setClubDate] = useState("")
  const [clubWebsite, setClubWebsite] = useState("")
  const [clubField, setClubField] = useState("")
  const [clubImage, setClubImage] = useState("")
  const [status, setStatus] = useState(false)

  function http_club(e) {
    e.preventDefault()
    if (props.data) {
      axios.get("http://127.0.0.1:8000/club_edit", { // call api request to backend to store club data
        params: {
          id: clubId,//we use json.parse bcoz in our localstorage data in string
          club_name: clubName,
          club_description: clubDescription,
          club_date: clubDate,
          club_admin: JSON.parse(localStorage.getItem("user_config"))["email"],
          club_website: clubWebsite,
          club_field: clubField,
          club_image: clubImage,
        }
      })
        .then(response => {
          setStatus(true);
          setClubName("")
          setClubDescription("")
          setClubDate("")
          setClubWebsite("")
          setClubField("")
          setClubImage("")
        })
        .catch(error => console.log(error))
    }
    else {
      axios.get("http://127.0.0.1:8000/club_add", { // call api request to backend to store club data
        params: {
          club_name: clubName,
          club_description: clubDescription,
          club_date: clubDate,
          club_admin: JSON.parse(localStorage.getItem("user_config"))["email"], //we use json.parse bcoz in our localstorage data in string
          club_website: clubWebsite,
          club_field: clubField,
          club_image: clubImage,
        }
      })
        .then(response => {
          setStatus(true);
          setClubName("")
          setClubDescription("")
          setClubDate("")
          setClubWebsite("")
          setClubField("")
          setClubImage("")
        })
        .catch(error => console.log(error))
    }
  }

  useEffect(() => {
    if (props.data) {
      setClubId(props.data.id)
      setClubName(props.data.club_name)
      setClubDescription(props.data.club_description)
      setClubDate(props.data.club_date)
      setClubWebsite(props.data.club_website)
      setClubField(props.data.club_field)
      setClubImage(props.data.club_image)
    }
  }, [])

  const mainFields = ['Eng', 'Law', 'phy', 'other']
  return (
    <>
      {status && <div class="alert alert-success alert-dismissible fade show" role="alert">
        Club data stored successfully
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true" onClick={() => setStatus(false)}>&times;</span>
          <Link aria-hidden="true" to="/club">Back to clubs;</Link>
        </button>
      </div>}

      <form onSubmit={http_club} class="min-w-screen flex min-h-screen items-center justify-center bg-gray-900 px-5 py-5">
        <div class="w-full overflow-hidden rounded-3xl bg-gray-100 text-gray-500 shadow-xl" style={{ maxWidth: '1000px' }}>
          <div class="w-full md:flex">
            <div class="w-full px-5 py-10 md:px-10">
              <div class="mb-10 text-center">
                <h1 class="text-3xl font-bold text-gray-900">REGISTER</h1>
                <p>Enter your information to register</p>
              </div>
              <div>
                <div class="-mx-3 flex">
                  <div class="mb-2 w-full px-3">
                    <label for="inputName" class="px-1 text-xs font-semibold">Club name</label>
                    <div class="flex">
                      <div class="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center"><i class="mdi mdi-account-outline text-lg text-gray-400"></i></div>
                      <input type="text" value={clubName} onChange={(e) => setClubName(e.target.value)} class="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-indigo-500" placeholder="John" />
                    </div>
                  </div>
                  <div class="mb-2 w-1/2 px-3">
                    <label for="inputDate" class="px-1 text-xs font-semibold">Start Date</label>
                    <div class="flex">
                      <div class="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center"><i class="mdi mdi-account-outline text-lg text-gray-400"></i></div>
                      <input type="date" max={Date.now()} value={clubDate} onChange={(e) => setClubDate(e.target.value)} class="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-indigo-500" placeholder="John" />
                    </div>
                  </div>
                  <div class="mb-2 w-1/2 px-3">
                    <label for="" class="px-1 text-xs font-semibold">Field</label>
                    <div class="flex">
                      <div class="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center"><i class="mdi mdi-account-outline text-lg text-gray-400"></i></div>
                      {/* <input type="text" class="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-indigo-500" placeholder="John" /> */}
                      <select name="inputClubStream" value={clubField} onChange={(e) => setClubField(e.target.value)}  id="inputClubStream" className="form-control -ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-indigo-500">
                        {
                          mainFields.map((field) => {
                            return (
                              <option value={field} key={field}>{field}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="-mx-3 flex">
                  <div class="mb-2 w-1/2 px-3">
                    <label for="" class="px-1 text-xs font-semibold">Image URL</label>
                    <div class="flex">
                      <div class="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center"><i class="mdi mdi-account-outline text-lg text-gray-400"></i></div>
                      <input type="url" value={clubImage} onChange={(e) => setClubImage(e.target.value)}  class="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-indigo-500" placeholder="John" />
                    </div>
                  </div>
                  <div class="mb-2 w-1/2 px-3">
                    <label for="" class="px-1 text-xs font-semibold">Website</label>
                    <div class="flex">
                      <div class="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center"><i class="mdi mdi-account-outline text-lg text-gray-400"></i></div>
                      <input type="url" value={clubWebsite} onChange={(e) => setClubWebsite(e.target.value)}  class="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-indigo-500" placeholder="John" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div class="-mx-3 flex">
                  <div class="mb-2 w-full px-3">
                    <label for="" class="px-1 text-xs font-semibold">Description</label>
                    <div class="flex">
                      <div class="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center"><i class="mdi mdi-account-outline text-lg text-gray-400"></i></div>
                      <textarea value={clubDescription} onChange={(e) => setClubDescription(e.target.value)} class="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-indigo-500" placeholder="John" rows={7} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="-mx-3 flex">
            <div class="mb-5 w-full px-3">
              <button class="mx-auto block w-full max-w-xs rounded-lg bg-indigo-500 px-3 py-3 font-semibold text-white hover:bg-indigo-700 focus:bg-indigo-700" type='submit'>{props.data ? "Edit" : "Save"}</button>
            </div>
          </div>
        </div>
      </form>
      {/* <div className='container mt-10'>
        <form className="row g-3" onSubmit={http_club}>
          <div className="col-md-12">
            <label for="inputName" className="form-label">Club Name</label>
            <input required type="text" className="form-control" id="inputName" value={clubName} onChange={(e) => setClubName(e.target.value)} />
          </div>

          <div className="col-12">
            <label for="inputDescription" className="form-label">Description</label>
            <input required type="text" className="form-control" id="inputDescription" placeholder="1234 Main St" value={clubDescription} onChange={(e) => setClubDescription(e.target.value)} />
          </div>

          <div className="col-md-6">
            <label for="inputDate" className="form-label">Start Date</label>
            <input required type="date" className="form-control" id="inputDate" value={clubDate} onChange={(e) => setClubDate(e.target.value)} />
          </div>

          <div className="col-md-6">
            <label for="inputImgURL" className="form-label">Insert URL for Club Photo</label>
            <input type="url" className="form-control" id="inputImgURL" onChange={(e) => setClubImage(e.target.value)} />
          </div>

          <div className="col-md-6">
            <label for="inputClubURL" className="form-label">Enter club URL</label>
            <input type="url" className="form-control" id="inputClubURL" onChange={(e) => setClubWebsite(e.target.value)} />
          </div>

          <div className="col-md-6">
            <label for="inputClubStream" className="form-label">Main stream</label>
            <select name="inputClubStream" id="inputClubStream" className="form-control" onChange={(e) => setClubField(e.target.value)} >
              {
                mainFields.map((field)=>{
                  return(
                  <option value={field} key={field}>{field}</option>
                  )
                })
              }
            </select>
          </div>

          <div className="col-12">
            <button required type="submit" className="btn btn-primary">{props.data ? "Edit" : "Save"}</button>
          </div>

        </form>
      </div> */}

    </>
  )
}

export default ClubForm