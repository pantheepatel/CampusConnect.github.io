import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link, json } from 'react-router-dom';

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
      <Card style={{ 'height': 'auto' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title className='capitalize'>{props.name}</Card.Title>
          {
            console.log(props.id)
          }
          <Card.Text>
            {props.admin ? <p>{props.admin}</p> : <p>no data</p>}
            {props.date ? <p>{props.date}</p> : <p>no data</p>}
            {props.description ? <p>{props.description}</p> : <p>no data</p>}

            {/* {
              props.image ?
                <Card.Img src={props.image} className='h-25' />
                :
                <div>no image found</div>
            }
            {
              props.website ?
                <p src={props.website} className='h-25' />
                :
                <div>no image found sdaf</div>
            } */}
            <br />
            {isLoggedIn
              ?

              <Link to={`/club/${props.id}`}>
                <Button variant="btn btn-outline-primary outline-3">
                  Know More
                </Button>
              </Link>
              :
              <span>astfbghjkk</span>
            }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ClubCard