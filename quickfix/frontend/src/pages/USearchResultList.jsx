import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import { useLocation } from "react-router-dom";
// import WorkerCard from "../shared/WorkerCard";


import UserHeader from '../components/Header/UserHeader'
// import UserSearchBar from './../shared/UserSearchBar'
import UserWorkerCard from "../shared/UserWorkerCard";
const USearchResultList = () => {
  const location = useLocation();

  const [data] = useState(location.state);

  console.log(data);

  return (
    <>
    <UserHeader />
    {/* <section>
        <Container>
          <Row>
            <UserSearchBar />
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
                  
                  <UserWorkerCard worker={worker} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default USearchResultList;
