import React, { useEffect, useRef, useState, useContext } from "react";
import "../styles/work-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
// import worker from '../assets/data/worker'
import calculateAvgRating from "../utils/avgRating";

import avatar from "../assets/images/avatar.jpg";

import Booking from "../components/Booking/Booking";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

import { AuthContext } from "./../context/AuthContext";

const WorkDetails = () => {
  const { id } = useParams();

  const reviewMsgRef = useRef("");
  const [workRating, setWorkRating] = useState(null);
  const { user } = useContext(AuthContext);

  // const work = worker.find(work => work.id === id);
  const { data: work, loading, error } = useFetch(`${BASE_URL}/works/${id}`);

  const {
    service,
    workername,
    location,
    price,
    // available,
    zipcode,
    street,
    reviews,
  } = work;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = { day: "numeric", month: "long", year: "numeric" };

  //submit req to server

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    try {
      if (!user || user === undefined || user === null) {
        alert("Please Sign in");
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: workRating,
      };
      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        header: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);
      // alert("Review Submitted");
    } catch (err) {
      alert(err.message);
    }

    // alert(`${reviewText}, ${workRating}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [work]);

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              <Col lg="8">
                <div className="work__content">
                  {/* <img src="" alt="" /> */}
                  <div className="work__info">
                    <h2>{service}</h2>
                    <h5>Name : {workername}</h5>

                    <div className="d-flex align-items-center gap-5"></div>

                    <div className="d-flex align-items-center gap-5">
                      <span>Street : {street}</span>
                    </div>

                    <div className="d-flex align-items-center gap-5">
                      <span>Zipcode : {zipcode}</span>
                    </div>

                    <span className="worker__rating d-flex align-items-center gap-0.5rem">
                      <i
                        class="ri-star-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        "Not rated"
                      ) : (
                        <span1>({reviews?.length})</span1>
                      )}
                    </span>

                    <div className="work__extra-details">
                      <span>
                        <i class="ri-map-pin-2-line"></i>
                        {location}
                      </span>
                      <span>
                        <i class="ri-money-dollar-circle-line"></i>${price} per
                        day
                      </span>
                      {/* <span><i class="ri-map-pin-2-line"></i>{place}</span> */}
                    </div>
                  </div>

                  {/* ==================Review section ====================*/}

                  <div className="work__reviews mt-4">
                    <h4>Reviews ({reviews?.length} reviews)</h4>
                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                        <span onClick={() => setWorkRating(1)}>
                          1 <i class="ri-star-fill"></i>
                        </span>
                        <span onClick={() => setWorkRating(2)}>
                          2 <i class="ri-star-fill"></i>
                        </span>
                        <span onClick={() => setWorkRating(3)}>
                          3 <i class="ri-star-fill"></i>
                        </span>
                        <span onClick={() => setWorkRating(4)}>
                          4 <i class="ri-star-fill"></i>
                        </span>
                        <span onClick={() => setWorkRating(5)}>
                          5 <i class="ri-star-fill"></i>
                        </span>
                      </div>

                      <div className="review__input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="Share Your Experience "
                          required
                        />
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>

                    <ListGroup className="user__reviews">
                      {reviews?.map((review) => (
                        <div className="review__item">
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>Samuel</h5>
                                <p>
                                  {new Date("01-18-2023").toLocaleDateString(
                                    "en-US",
                                    options
                                  )}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                5 <i class="ri-star-fill"></i>
                              </span>
                            </div>

                            <h6>Amazing Work</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>

                  {/* ==================Review section End ====================*/}
                </div>
              </Col>
              <Col lg="4">
                <Booking work={work} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default WorkDetails;
