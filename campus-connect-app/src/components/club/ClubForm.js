import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
// import dynamic from 'next/dynamic'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

function ClubForm(props) {
  // const ReactQuill = dynamic(() => import("react-quill"), {
  //   ssr: false
  // });
  const [clubId, setClubId] = useState("")
  const [clubName, setClubName] = useState("")
  const [clubDate, setClubDate] = useState("")
  const [clubField, setClubField] = useState("")
  const [clubImage, setClubImage] = useState("")
  const [clubWebsite, setClubWebsite] = useState("")
  const [clubDescription, setClubDescription] = useState("")
  const [status, setStatus] = useState(false) //for alert
  const [value, setValue] = useState("");
  const quillRef = useRef();
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"], //, "image", "video"
      ["clean"],
    ],
  };
  function http_club(e) {
    e.preventDefault()
    if (props.data) {
      axios.get("http://127.0.0.1:8000/club_edit", { // call api request to backend to store club data
        params: {
          club_id: clubId,//we use json.parse bcoz in our localstorage data in string
          club_name: clubName,
          club_description: clubDescription,
          club_date: clubDate,
          club_admin: JSON.parse(localStorage.getItem("user_config"))["email"],
          club_image: clubImage,
          club_field: clubField,
          club_website: clubWebsite,
        }
      })
        .then(response => {
          setStatus(true);
          setClubId("")
          setClubName("")
          setClubDescription("")
          setClubDate("")
          setClubImage("")
          setClubField("")
          setClubWebsite("")
          window.location.replace('/club/myClub')
        })
        .catch(error => console.log(error))
    }
    else {
      axios.get("http://127.0.0.1:8000/club_add", { // call api request to backend to store club data
        params: {
          club_id: clubId,//we use json.parse bcoz in our localstorage data in string
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
          setClubId("")
          setClubName("")
          setClubDescription("")
          setClubDate("")
          setClubImage("")
          setClubField("")
          setClubWebsite("")
          window.location.replace('/club/myClub')
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
      setClubImage(props.data.club_image)
      setClubField(props.data.club_field)
      setClubWebsite(props.data.club_website)
    }
  }, [])

  // scrapped data for this, file --> scrape.ipynb in api folder
  const mainFields = ['School of Applied Sciences', 'School of Architecture', 'School of Management',
    'School of Engineering and Technology', 'School of Computer Applications', 'School of Pharmacy',
    'School of Physiotherapy', 'School of Commerce and Professional Education',
    'School of Media and Communications', 'School of Law', 'School of Design',
    'Doctorate of Research', 'School of Planning', 'Other']

  return (
    <>
      {status && <div className="alert alert-success alert-dismissible fade show" role="alert">
        Club data stored successfully
        <button type="button" className="close justify-between" data-dismiss="alert" aria-label="Close">
          <Link aria-hidden="true" to="/club">Back to clubs</Link>
          <span aria-hidden="true" onClick={() => setStatus(false)}>&times;</span>
        </button>
      </div>}

      <form onSubmit={http_club} className="min-w-screen flex min-h-screen items-center justify-center px-5 py-5">
        <div className="w-full overflow-hidden rounded-3xl bg-gray-100 text-gray-500 shadow-xl border-2 border-gray-500" style={{ maxWidth: '1000px' }}>
          <div className="w-full md:flex">
            <div className="w-full px-5 py-10 md:px-10">
              <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold text-gray-900">{props.data ? 'EDIT YOUR CLUB' : 'REGISTER YOUR CLUB'}</h1>
                {/* <p>Enter your information to register</p> */}
              </div>
              <div>
                <div className="-mx-3 flex">
                  <div className="mb-2 w-full px-3">
                    <label for="inputName" className="px-1 text-xs font-semibold">Club name</label>
                    <div className="flex">
                      <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center"><i className="mdi mdi-account-outline text-lg text-gray-400"></i></div>
                      <input type="text" value={clubName} onChange={(e) => setClubName(e.target.value)} className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-indigo-500" placeholder="John" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="-mx-3 flex">
                  <div className="mb-2 w-1/2 px-3">
                    <label for="inputDate" className="px-1 text-xs font-semibold">Start Date</label>
                    <div className="flex">
                      <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center"><i className="mdi mdi-account-outline text-lg text-gray-400"></i></div>
                      <input type="date" max={Date.now()} value={clubDate} onChange={(e) => setClubDate(e.target.value)} className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-indigo-500" placeholder="John" />
                    </div>
                  </div>
                  <div className="mb-2 w-1/2 px-3">
                    <label for="" className="px-1 text-xs font-semibold">Field</label>
                    <div className="flex">
                      <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center"><i className="mdi mdi-account-outline text-lg text-gray-400"></i></div>
                      {/* <input type="text" className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-indigo-500" placeholder="John" /> */}
                      <select name="inputClubStream" value={clubField} onChange={(e) => setClubField(e.target.value)} id="inputClubStream" className="form-control -ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-indigo-500">
                        <option selected hidden >-- Select --</option>
                        {
                          mainFields.map((field, index) => {
                            return (
                              <option value={field} key={index}>{field}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="-mx-3 flex">
                  <div className="mb-2 w-1/2 px-3">
                    <label for="" className="px-1 text-xs font-semibold">Image URL</label>
                    <div className="flex">
                      <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center"><i className="mdi mdi-account-outline text-lg text-gray-400"></i></div>
                      <input type="url" value={clubImage} onChange={(e) => setClubImage(e.target.value)} className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-indigo-500" placeholder="John" />
                    </div>
                  </div>
                  <div className="mb-2 w-1/2 px-3">
                    <label for="" className="px-1 text-xs font-semibold">Website</label>
                    <div className="flex">
                      <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center"><i className="mdi mdi-account-outline text-lg text-gray-400"></i></div>
                      <input type="url" value={clubWebsite} onChange={(e) => setClubWebsite(e.target.value)} className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-indigo-500" placeholder="John" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="-mx-3 flex">
                  <div className="mb-2 w-full px-3">
                    <label for="" className="px-1 text-xs font-semibold">Description</label>
                    <div className="flex">
                      <div className="pointer-events-none z-10 flex w-10 items-center justify-center pl-1 text-center"><i className="mdi mdi-account-outline text-lg text-gray-400"></i></div>
                      <textarea value={clubDescription} onChange={(e) => setClubDescription(e.target.value)} className="-ml-10 w-full rounded-lg border-2 border-gray-200 py-2 pl-10 pr-3 outline-none focus:border-indigo-500" placeholder="John" rows={7} />
                      {/* <ReactQuill ref={quillRef} theme="snow" value={value} onChange={setValue} /> */}
                      {/* <ReactQuill  modules={modules} theme="snow" value={clubDescription} onChange={(e) => setClubDescription(e.target.value)} placeholder="The content starts here..." className='mt-2' /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="-mx-3 flex">
            <div className="mt-3 mb-5 w-full px-3">
              <button className="mx-auto block w-full max-w-xs rounded-lg bg-indigo-500 px-3 py-3 font-semibold text-white hover:bg-indigo-700 focus:bg-indigo-700" type='submit'>{props.data ? "Edit" : "Save"}</button>
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