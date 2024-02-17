import React from 'react'
import WorkCard from '../../shared/WorkCard'
import workData from '../../assets/data/works'
import { Col } from 'reactstrap'

const FeaturedWorkList = () => {
  return (
    <>
    {
        workData?.map(work =>(
            <Col lg="3" className="mb-4" key={work.id}>
                <WorkCard work={work}/>
            </Col>
        ))
    }</>
  );
};
export default FeaturedWorkList