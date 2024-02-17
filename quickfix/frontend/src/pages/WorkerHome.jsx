import React, { useState, useContext } from "react";
import { useEffect } from "react";
import WorkerHeader from "../components/Header/WorkerHeader";
import "../styles/work.css";
import { Container, Row, Col } from "reactstrap";
// import userbookingData from "../assets/data/userbooking";
import UserBookingCard from "../shared/UserBookingCard";

import { AuthContext } from "../context/AuthContext";
import useFetch from "./../hooks/useFetch";
import { BASE_URL } from "./../utils/config";

const WorkerHome = () => {
  const { worker } = useContext(AuthContext);
 
  const workId = worker?._id;
  // console.log(workId)
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: notifications,
    loading,
    error,
  } = useFetch(`${BASE_URL}/worker/notifications/${workId}`) ;

  
  // const { data: notificationCount } = useFetch(
  //   `${BASE_URL}/worker/notifications/count/${workId}`
  // );
  // console.log(data)

  // useEffect(() => {
  //   const pages = Math.ceil(notificationCount / 8);
  //   setPageCount(pages);
  //   window.scrollTo(0, 0);
  // }, [page, notificationCount,notifications]);
  useEffect(() => {
    if (notifications) {
      const sortedNotifications = [...notifications].sort((a, b) => {
        const dateA = new Date(a.bookAt);
        const dateB = new Date(b.bookAt);
        return dateB.getTime() - dateA.getTime();
      });
  
      const filteredNotifications = sortedNotifications.filter(
        (notification) => {
          const currentDate = new Date();
          const bookingDate = new Date(notification.bookAt);
          return bookingDate >= currentDate;
        }
      );
      console.log(filteredNotifications)
  
      const pages = Math.ceil(filteredNotifications.length / 8);
      setPageCount(pages);
    }
  }, [notifications]);

  const sortedNotifications = [...notifications].sort((a, b) => {
    const dateA = new Date(a.bookAt);
    const dateB = new Date(b.bookAt);
    return dateA.getTime() - dateB.getTime();
  });

  // const paginatedNotifications = notifications?.slice(page * 8, (page + 1) * 8);
  const filteredNotifications = sortedNotifications?.filter((notification) => {
    const currentDate = new Date();
    const bookingDate = new Date(notification.bookAt);
    return bookingDate >= currentDate;
  });

  console.log(filteredNotifications)

  return (
    <>
      <WorkerHeader />

      <section className="pt-0 ">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              {/* {notifications?.map((userbooking) => (
                <Col lg="6" className="mb-4" key={userbooking._id}>
                  <UserBookingCard userbooking={userbooking} />
                </Col> */}
              {filteredNotifications?.map((userbooking) => (
                <Col lg="6" className="mb-4" key={userbooking._id}>
                  <UserBookingCard userbooking={userbooking} />
                </Col>
              ))}

              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : " "}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default WorkerHome;
