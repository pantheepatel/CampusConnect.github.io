import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
      <Card style={{ 'height': '15rem' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title className='capitalize'>{props.name}</Card.Title>
          {props.image ?
            <Card.Img src={props.Img} />
            :
            <p>no</p>
          }
          <Card.Text>
            {props.admin ? <p>{props.admin}</p> : <p>no data</p>}
            {props.date ? <p>{props.date}</p> : <p>no data</p>}
            {props.description ? <p>{props.description}</p> : <p>no data</p>}

            {/* description - {props.description}
          <br />
          admin - {props.admin}
          <br />
          date - {props.date} */}
            <br />
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  )
}

export default ClubCard