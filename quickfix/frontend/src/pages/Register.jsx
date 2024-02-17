import React from 'react'
import { Container, Button, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'

const login = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="pt-5 text-center">


              <div className="login">
                <span><i class="ri-user-add-line register-icon"></i></span>
                {/* <h1 className="mb-3 fw-semibold">QUICK FIX</h1> */}


              </div>
              <div className="user__login">


                <Button className="btn primary__btn  " ><Link to='/userregister'><h1>USER REGISTER</h1></Link></Button>

              </div>
              <div className="worker__login">
                <Button className=" chat btn primary__btn " ><Link to='/workerregister'><h1>WORKER REGISTER</h1></Link></Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default login
