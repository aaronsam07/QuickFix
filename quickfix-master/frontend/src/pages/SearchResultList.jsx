import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import { useLocation } from "react-router-dom";
import WorkerCard from "../shared/WorkerCard";
// import SearchBar from "../shared/SearchBar";
import Header from '../components/Header/Header'



const SearchResultList = () => {
  const location = useLocation();

  const [data] = useState(location.state);

  console.log(data);

  return (
    <>
    <Header />
    {/* <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section> */}
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center">No Worker Found</h4>
            ) : (
              data?.map(worker => (
                <Col lg="6" className="mb-4" key={worker._id}>
                  
                  <WorkerCard worker={worker} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchResultList;
