import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/yN5Yc1ZR/appointment-8295104-1280.webp"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Appointment Tracker
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
