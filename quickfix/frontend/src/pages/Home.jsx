import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.jpg'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from './../shared/Subtitle'

import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedWorkList from '../components/Featured-works/FeaturedWorkList'

import Testimonials from '../components/Testimonial/Testimonials'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
// import Newsletter from '../shared/Newsletter'

const Home = () => {
  return (
    <>
      <Header />
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Before You Stress, Let Us Fix It Best.'} />
                  <img src={worldImg} alt='' />
                </div>
                <h1>From <span className="highlight">Repairs to Renovations </span>
                  We've Got You Covered .

                </h1>
                <p>
                  Your trusted Handyman Services. From repairs to renovations, we transform houses into beautiful, functional homes.
                  Skilled in various trades, we provide meticulous attention to detail and quality craftsmanship.
                  With a commitment to customer satisfaction, we offer tailored solutions, open communication, and exceptional service.
                  Licensed, insured, and dedicated to professionalism, Register Now for convenient and high-quality handyman services.
                </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroVideo} alt="" />
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>



      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">What we Serve</h5>
              <h2 className="service__title">We Offer Our Best Services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={'Discover'} />
              <h2 className="featured__tour-title">Our Specialties</h2>
            </Col>
            <FeaturedWorkList />
          </Row>
        </Container>
      </section>


      {/* Experience section Start */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'} />
                <h2>With Our All Experience <br /> We Will Serve You . .</h2>
                <p>
                  Our skilled handyman services are tailored to meet the unique needs of individuals,
                  providing reliable solutions for all your repair and <br /> maintenance requirements.</p>
              </div>

              <div className="counter__wrapper d-flex align-item-center gap-5">
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Completed Works</h6>
                </div>
                <div className="counter__box">
                  <span>1k+</span>
                  <h6>Regular Customers</h6>
                </div>
                <div className="counter__box">
                  <span>2</span>
                  <h6>Years Experience </h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>

        </Container>
      </section>
      {/* Experience section Ends */}

      {/* Not Included Gallery Section */}

      {/* Testimonials Start */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Glowing Endorsements'} />
              <h2 className="testimonial__title">What Our Clients Say About Us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* <Newsletter/> */}



      {/* Testimonials Ends */}

      <Footer />

    </>
  )
}

export default Home