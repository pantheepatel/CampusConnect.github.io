import React from 'react'

function ClubCard(props) {
  let clubCardData = [{
    name: 'club1',
    description: 'lorem ipsum1',
    startDate: '28-8-2004',
    admin: 'admin11@gmail.com',
    core_team: ['admin12@gmail.com', 'admin13@gmail.com', 'admin14@gmail.com'],
    main_stream: 'Engineering',
    // photo:'url' // not now
  }, {
    name: 'club2',
    description: 'lorem ipsum2',
    startDate: '28-8-20024',
    admin: 'admin21@gmail.com',
    core_team: ['admin22@gmail.com', 'admin23@gmail.com', 'admin24@gmail.com'],
    main_stream: 'Mass and Media',
    // photo:'url' // not now
  }, {
    name: 'club3',
    description: 'lorem ipsum3',
    startDate: '28-5-2004',
    admin: 'admin31@gmail.com',
    core_team: ['admin32@gmail.com', 'admin33@gmail.com', 'admin34@gmail.com'],
    main_stream: 'Law',
    // photo:'url' // not now
  }]
  // task1 : make only 1 card with UI that can display this data
  return (
    <div>
      <div className='row columns-1 md:columns-3'>
        <div className='card'>
          <img className='card-img' src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fphoto&psig=AOvVaw3j-1ic7gnU4LVg9rulqqet&ust=1693627991972000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNj1sYjGiIEDFQAAAAAdAAAAABAE" alt="" />
          <div>
            name : {props.name}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClubCard