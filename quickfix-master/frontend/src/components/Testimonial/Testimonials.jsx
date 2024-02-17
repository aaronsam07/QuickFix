import React from 'react'
import Slider from 'react-slick'

const Testimonials = () => {

  const settings ={
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,

    Responsive:[
      {
        breakpoint:992,
        settings:{
          slidesToShow:2,
          SlidesToScroll:1,
          infinite:true,
          dots:true,
        },
      },
      {
        breakpoint:576,
        settings:{
          slidesToShow:1,
          SlidesToScroll:1,
        },
      },
    ]

  }


  return (
    <Slider {...settings} >
      <div className="testimonial py-4 px-3">
        <p>"The team from QuickFix did an excellent job repairing our plumbing issues. 
          They were prompt, professional, and fixed the problem efficiently. Highly recommended"</p>
        <div className="d-flex align-items-center gap-4 mt-3">
        {/* <img src="" alt="" /> */}
        <div>
          <h6 className="mb-0 mt-3">Aaron B</h6>
          <p>Customer</p>
        </div>
      </div>
      </div>


      <div className="testimonial py-4 px-3">
        <p>"I recently hired  for some electrical work in my home, and I couldn't be happier with the results.
           The electrician was knowledgeable, courteous, and completed the job to perfection. Will definitely use their services again"</p>
        <div className="d-flex align-items-center gap-4 mt-3">
        {/* <img src="" alt="" /> */}
        <div>
          <h6 className="mb-0 mt-3">Ace N</h6>
          <p>Customer</p>
        </div>
      </div>
      </div>

      

      <div className="testimonial py-4 px-3">
        <p>
          "I had a fantastic experience with QuickFix. 
          They transformed my outdated kitchen into a modern space with their exceptional carpentry and renovation skills.
           The attention to detail and quality of work exceeded my expectations!"
           </p>
        <div className="d-flex align-items-center gap-4 mt-3">
        {/* <img src="" alt="" /> */}
        <div>
          <h6 className="mb-0 mt-3">M Habi</h6>
          <p>Customer</p>
        </div>
      </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>"I've tried several handyman services before, but this website exceeded my expectations. 
          The platform offers a wide range of services, and I found a handyman who was experienced and affordable. 
          The entire process was smooth, and I'm extremely satisfied with the outcome."</p>
        <div className="d-flex align-items-center gap-4 mt-3">
        {/* <img src="" alt="" /> */}
        <div>
          <h6 className="mb-0 mt-3">Samuel S</h6>
          <p>Customer</p>
        </div>
      </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>"I had an amazing experience with this handyman website. 
          The platform made it effortless to find a skilled professional for my home improvement projects. 
          The handyman was prompt, courteous, and completed the job to perfection. I couldn't be happier!"</p>
        <div className="d-flex align-items-center gap-4 mt-3"></div>
        <img src="" alt="" />
        <div>
          <h6 className="mb-0 mt-3">Gokul K</h6>
          <p>Customer</p>
        </div>
      </div>


      <div className="testimonial py-4 px-3">
        <p>"I highly recommend this handyman website for all your repair needs.
           I found a talented professional who resolved the issue efficiently. 
           The level of expertise and professionalism displayed was outstanding.
            I will definitely be using their services again!"</p>
        <div className="d-flex align-items-center gap-4 mt-3"></div>
        <img src="" alt="" />
        <div>
          <h6 className="mb-0 mt-3">Devak K</h6>
          <p>Customer</p>
        </div>
      </div>


      


    </Slider>
  )
}

export default Testimonials