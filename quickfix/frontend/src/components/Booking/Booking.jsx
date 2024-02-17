import React, { useState, useContext } from "react";
import "./booking.css";
import { Form, FormGroup, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

// import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ work, avgRating }) => {
  const { id } = useParams();
  const { price, reviews } = work;

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [booking, setBooking] = useState({
    userId: user?._id,
    userEmail: user?.email,
    fullName: "",
    location: "",
    phone: "",
    bookAt: "",
  });

  const handleChange = (e) => {
    setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      if (!user || user === undefined || user === null) {
        return alert("Please Sign in");
      }

      const res = await fetch(`${BASE_URL}/booking/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });
      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }
      navigate("/thank-you");
    } catch (err) {
      // console.log(err)
      alert(err.message);
    }
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>per day</span>
        </h3>
        <span className="worker__rating d-flex align-items-center ">
          <i class="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      {/*  ============booking form start====================== */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form " onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="FullName"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              placeholder="Location"
              id="location"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>

      {/*  ============booking form end====================== */}

      <div className="booking__bottom">
        {/* <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        
                    </ListGroupItem>
                </ListGroup> */}

        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Book Now
        </Button>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
          Negotiate
        </Button>
      </div>
    </div>
  );
};

export default Booking;
