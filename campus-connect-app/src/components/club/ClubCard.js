import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link, json } from 'react-router-dom';
import LinkIcon from '@mui/icons-material/Link';
import PersonIcon from '@mui/icons-material/Person';

function ClubCard(props) {
  var isLoggedIn = false
  if (localStorage['user_config'] != 'null') {
    isLoggedIn = true
  }

  console.log('is user user_config?', localStorage)
  console.log('is user?', isLoggedIn)

  // task1 : make only 1 card with UI that can display this data
  return (

    <div>
      <Link to={`/club/${props.id}`} className='decoration-none' style={{ textDecoration: 'none' }}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg my-2 bg-slate-300">
          <img className="w-full h-72" src={props.image} alt="image not found" />
          <div className="px-6 py-4">
            {console.log('url', props.id)}
            <div className='flex flex-row justify-between w-full'>
              {
                props.website ?
                  <a href={`//${props.website}`} className='curser-pointer flex gap-2 truncate'>
                    <div className="font-bold text-xl mb-2">{props.name}</div>
                    <LinkIcon className='my-1' />
                  </a>
                  :
                  <div className="font-bold text-xl mb-2">{props.name}</div>
              }
              {/* <div>
              <button type="button" className="btn btn-secondary z-50"
                data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-custom-className="custom-tooltip"
                data-bs-title={props.admin}>
                <PersonIcon fontSize='30'/>
              </button>
            </div> */}
            </div>
            <div className='font-semibold py-3'>
              <PersonIcon /> {props.admin}
            </div>
            <p className="text-gray-700 text-base description">
              {props.description}
            </p>
          </div>
          <div className="px-6 pb-2 justify-between flex">
            <span className="inline-block border-2 border-gray-400 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 w-3/5 truncate">{props.field}</span>
            <span className="inline-block border-2 border-gray-400 bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.date}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ClubCard