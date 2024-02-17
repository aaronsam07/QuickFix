import React from "react";
import { useState, useEffect } from "react";
// import CommonSection from '../shared/CommonSection'

import "../styles/work.css";

import SearchBar from "./../shared/SearchBar";
import { Container, Row, Col } from "reactstrap";

import WorkerCard from "../shared/WorkerCard";
// import workerData from "../assets/data/worker";
import Header from "../components/Header/Header";

//video 4
import useFetch from "./../hooks/useFetch";
import { BASE_URL } from "./../utils/config";

const Work = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: works,
    loading,
    error,
  } = useFetch(`${BASE_URL}/works?page=${page}`);
  const { data: workCount } = useFetch(`${BASE_URL}/works/search/getWorkCount`);

  useEffect(() => {
    const pages = Math.ceil(workCount / 8);
    setPageCount(pages);
    window.scrollTo(0,0)
  }, [page, workCount,works]);

  //video 4

  // const { data: availableWorks } = useFetch(
  //   `${BASE_URL}/works/search/getAvailableWorks`
  // );
  // console.log(availableWorks);

  return (
    <>
      <Header />
      {/* < CommonSection title={'ALL WORKS'} /> */}
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className="pt-0 ">
        <Container>
          {loading && <h4 className="text-center pt-5">Loading.....</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <Row>
              {works?.map((worker) => (
                <Col lg="6" className="mb-4" key={worker._id}>
                  <WorkerCard worker={worker} />
                </Col>
              ))}
              {/* video 4

            {/* {availableWorks?.map((worker) => (
              <Col lg="6" className="mb-4" key={worker._id}>
                <WorkerCard worker={worker} />
              </Col>
            ))} */}

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

export default Work;
