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
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={props.image} alt="Sunset in the mountains" />
        <div class="px-6 py-4">
          {/* {console.log('url',props.website)} */}
          <div className='flex flex-row justify-between'>
            {
              props.website ?
                <a href={`//${props.website}`} className='curser-pointer'>
                  <LinkIcon />
                  <div class="font-bold text-xl mb-2">{props.name}</div>
                </a>
                :
                <div class="font-bold text-xl mb-2">{props.name}</div>
            }
            {/* <div>
              <button type="button" class="btn btn-secondary z-50"
                data-bs-toggle="tooltip" data-bs-placement="top"
                data-bs-custom-class="custom-tooltip"
                data-bs-title={props.admin}>
                <PersonIcon fontSize='30'/>
              </button>
            </div> */}
          </div>
          <div className='font-semibold py-3'>
            <PersonIcon/> {props.admin}
          </div>
          <p class="text-gray-700 text-base">
            {props.description}
          </p>
        </div>
        <div class="px-6 pb-2 justify-between flex">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.field}</span>
          <span class="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.date}</span>
        </div>
      </div>
    </div>
  )
}

export default ClubCard