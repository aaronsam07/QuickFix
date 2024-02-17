import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import "./worker-card.css";

const UserBookingCard = ({ userbooking }) => {
  const { /*id,*/ fullName, location, phone, bookAt } = userbooking;

  const dateString = bookAt;
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Month value is zero-based, so add 1
  const day = date.getDate();

  return (
    <>
      <div className="worker__card">
        <Card>
          <CardBody>
            {/* <h3 className="worker__title"><Link to={`/works/${id}`}>{worktype}</Link></h3> */}

            <h6 className="worker__name">Name :{fullName}</h6>

            <div className="card__top d-flex align-items-center justify-content-between">
              <span className="worker__location d-flex align-items-center gap-1">
                <i class="ri-map-pin-line"></i>
                {location}
              </span>

              {/* <span className="worker__rating d-flex align-items-center gap-1">
                            <i class="ri-star-fill"></i> {avgRating}
                            <span>({reviews.length})</span>
                        </span> */}
            </div>

            <div className="card__top d-flex align-items-center justify-content-between">
              <span className="worker__location d-flex align-items-center gap-1">
                <i class="ri-phone-fill"></i>
                {phone}
              </span>
            </div>

            <div className="card__top d-flex align-items-center justify-content-between">
              <span className="worker__location d-flex align-items-center gap-1">
                <i class="ri-calendar-line"></i>
                {/* {`${day}-${month}-${year}`} */}
                {`${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`}
              </span>
            </div>

            <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
              <button className="btn booking__btn">
                <h5>
                  {" "}
                  <Link to={`/chat`}>Chat With User</Link>
                </h5>
              </button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default UserBookingCard;
