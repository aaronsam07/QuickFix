import React from 'react'
import { Container ,Row , Col , Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import "../styles/thank-you.css"

const ThankYou = () => {
  return (
    
    <section>
        <Container>
            <Row>
                <Col lg="12" className="pt-5 text-center">
                    <div className="thank__you">
                        <span><i class="ri-checkbox-circle-line"></i></span>
                        <h1 className="mb-3 fw-semibold">Congratulations!</h1>
                        <h4 className="mb-4">Your Worker Is Booked. </h4>

                        <Button className = "btn primary__btn w-25" ><Link to='/user/works'>Back to Home</Link></Button>
                        
                    </div>
                    <div>
                    <Button className = " chat btn primary__btn w-25" >Chat With Worker</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ThankYou