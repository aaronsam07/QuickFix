import React from 'react'
import { Card, CardBody } from 'reactstrap';
// import { Link } from 'react-router-dom'

import './work-card.css'

const WorkCard = ({ work }) => {

    // Have Removed something from this array... 
const {  title, price, photo,  } = work

    return (
        <div className='work__card'>
            <Card>
                <div className="work__img">
                    <img src={photo} alt="work-img" />
                    {/* <span>Featured</span> */}
                </div>




                <CardBody>
                <div className="card__top d-flex align-items-center justify-content-between">
                    <span className="work__location d-flex align-items-center gap-1">
                        {/* icon */}
                    </span>

                    {/* <span className="work__location d-flex align-items-center gap-1">
                        icon rating
                    </span> */}


                </div>

                <h5 className="work__title"> {/*<link to={`/works/${id}`} > {title}</link> */}  {title}</h5>

                <div className="card__bottom d-flex align-items-center justify-content-between mt-3" >
                    <h5><span1>Price :</span1> ${price} <span>per day</span></h5>

                    {/* <button className="btn booking__btn"></button> */}
                </div>
            </CardBody>
            </Card>

            
        </div>
    )
};

export default WorkCard