import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from "reactstrap"


const servicesData =[
    {
        icon : "ri-group-line" ,
        title: "Experienced Team" ,
        desc: "Experienced team with proven expertise and skills.",
    },
    {
        icon : "ri ri-emotion-happy-line",
        title: "Customer Satisfaction " ,
        desc: "Exceeding customer expectations for complete satisfaction.",
    },
    {
        icon :"ri-price-tag-3-line",
        title: "Competitive Pricing" ,
        desc:"Budget-friendly rates for exceptional value and quality.",
    },
]



const ServiceList = () => {
  return (
    <>
    {
        servicesData.map((item,index) => (
            <Col lg="3" key={index}>
                <ServiceCard item={item}></ServiceCard>
            </Col>
        ))
    }
    </>
  )
}

export default ServiceList