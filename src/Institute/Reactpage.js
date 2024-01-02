import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Reactpage.css'

const Reactpage = () => {
  return (
    <div className='filter'>
      <div className='navbar'>
        <div className='nav-head'>
          <h1>BrandName</h1>
        </div>
        <ul className='nav-ul1'>
          <li><a href='www.'>Home</a></li>
          <li><a href='www.'>Product</a></li>
          <li><a href='www.'>Pricing</a></li>
          <li><a href='www.'>Contact</a></li>
        </ul>
        <ul className='nav-btn'>
          <li><button id='login-btn'>Login</button></li>
          <div className='join'>
          <li><button id='join-btn'>Join us</button>
          <img src='icn arrow-right.icn-xs.png' alt='no'></img>
          </li>
          </div>
        </ul>

      </div>


      <div className='container'>
        <div>
          <h5 className='header-tag'>Online training</h5>
          <h1>In Deapth,<br></br>Demonding<br></br>Courses</h1>
          <h4 id='sub-heading'>We know how large objeccts will act,<br></br>but things on a small scale</h4>
          <div className='btn'>
            <button>Quite now</button>
            <button>Learn more</button>
          </div>
        </div>
        <div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Reactpage;