import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/worker-register.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Input,
  FormGroup,
  Label,
  Button,
  Form,
} from "reactstrap";

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const useCredentials = () => {
  const [credentials, setCredentials] = useState({
    workername: "",
    service: "",
    email: "",
    password: "",
    gender: "",
    location: "",
    zipcode: "",
    street: "",
    phoneno: "",
    price: "",
  });

  const handleCredentialsChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return { credentials, handleCredentialsChange };
};

const WorkerRegister = () => {
  const { credentials, handleCredentialsChange } = useCredentials();

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Add the CSS class to disable scrolling on the Worker Register page
    document.body.classList.add("disable-scroll");

    return () => {
      // Remove the CSS class when the component is unmounted
      document.body.classList.remove("disable-scroll");
    };
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    const allFieldsFilled = Object.values(credentials).every(
      (value) => value.trim() !== ""
    );

    if (allFieldsFilled) {
      // Perform any necessary processing or API calls with the form data
      try {
        const res = await fetch(`${BASE_URL}/auth/workerregister`, {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(credentials),
        });
        const result = await res.json();

        if (!res.ok) {
          alert(result.message);
          navigate("/workerregister");
        }
        // Self
        else {
          dispatch({ type: "WORKER_REGISTER_SUCCESS" });
          navigate("/workerlogin");
        }
      } catch (err) {
        alert(err.message);
      }
    } else {
      // Display an error message or handle the case when the form is not complete
      console.log("Please fill out all required fields.");
    }
  };

  return (
    <div className="worker-register">
      <Container className="h-custom justify-content-center align-items-center">
        <Row className="justify-content-center align-items-center">
          <Col md="8" lg="6" xl="5">
            <Card
              className="card-registration"
              style={{ borderRadius: "15px" }}
            >
              <CardBody className="p-0">
                <Form onSubmit={handleClick}>
                  <Row>
                    <Col
                      md="6"
                      className="bg-white p-4"
                      style={{ marginLeft: "-230px" }}
                    >
                      <h3 className="fw-1rem mb-5" style={{ color: "#0b2727" }}>
                        General Information
                      </h3>
                      <FormGroup className="mb-3">
                        <Label for="workername">Full Name</Label>
                        <Input
                          type="text"
                          id="workername"
                          bsSize="lg"
                          value={credentials.workername}
                          onChange={handleCredentialsChange}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <Label for="service">Service</Label>
                        <Input
                          type="select"
                          id="service"
                          bsSize="lg"
                          value={credentials.service}
                          onChange={handleCredentialsChange}
                          required
                        >
                          <option value="" disabled>
                            Select
                          </option>
                          <option value="Carpenter">Carpenter</option>
                          <option value="Plumber">Plumber</option>
                          <option value="Painter">Painter</option>
                          <option value="Flooring">Flooring</option>
                          <option value="Home Renovation">
                            Home Renovation
                          </option>
                          <option value="Roofing">Roofing</option>
                          <option value="Electrical Work">
                            Electrical Work
                          </option>
                        </Input>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <Label for="email">Email</Label>
                        <Input
                          type="email"
                          id="email"
                          bsSize="lg"
                          value={credentials.email}
                          onChange={handleCredentialsChange}
                          autoComplete="username"
                          required
                        />
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <Label for="password">Password</Label>
                        <Input
                          type="password"
                          id="password"
                          bsSize="lg"
                          value={credentials.password}
                          onChange={handleCredentialsChange}
                          autoComplete="current-password"
                          required
                        />
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <Label for="gender">Gender</Label>
                        <Input
                          type="select"
                          id="gender"
                          bsSize="lg"
                          value={credentials.gender}
                          onChange={handleCredentialsChange}
                          required
                        >
                          <option value="" disabled>
                            Select
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </Input>
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <Label for="price">Price</Label>
                        <Input
                          type="text"
                          id="price"
                          bsSize="lg"
                          value={credentials.price}
                          onChange={handleCredentialsChange}
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col
                      md="6"
                      className="bg-indigo p-4 d-flex flex-column ml-4"
                      style={{ width: "730px", marginRight: "50px" }}
                    >
                      <h3
                        className="fw-1rem mb-5 text-white"
                        style={{ color: "#4835d4" }}
                      >
                        Contact Details
                      </h3>
                      <FormGroup className="mb-3">
                        <Label className="text-white" for="location">
                          Location
                        </Label>
                        <Input
                          placeholder="District"
                          type="text"
                          id="location"
                          bsSize="lg"
                          value={credentials.location}
                          onChange={handleCredentialsChange}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <Label className="text-white" for="zipcode">
                          Zip Code
                        </Label>
                        <Input
                          type="text"
                          id="zipcode"
                          bsSize="lg"
                          value={credentials.zipcode}
                          onChange={handleCredentialsChange}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <Label className="text-white" for="street">
                          Street
                        </Label>
                        <Input
                          type="text"
                          id="street"
                          bsSize="lg"
                          value={credentials.street}
                          onChange={handleCredentialsChange}
                          required
                        />
                      </FormGroup>
                      <FormGroup className="mb-3">
                        <Label className="text-white" for="phoneno">
                          Phone Number
                        </Label>
                        <Input
                          type="text"
                          id="phoneno"
                          bsSize="lg"
                          value={credentials.phoneno}
                          onChange={handleCredentialsChange}
                          required
                        />
                      </FormGroup>
                      <FormGroup check className="mb-3">
                        <Label className="text-white" check>
                          <Input
                            type="checkbox"
                            id="flexCheckDefault"
                            required
                          />
                          I accept the Terms and Conditions.
                        </Label>
                      </FormGroup>
                      <div className="d-flex">
                        <Button color="light" size="lg" type="submit">
                          Register
                        </Button>
                        {/* <Button
                          className="btn secondary__btn auth__btn"
                          type="submit"
                        >
                          Register
                        </Button> */}
                      </div>
                      <p
                        className="text-white mt-4"
                        style={{ marginLeft: "20px" }}
                      >
                        Already have an account?{" "}
                        <strong className="ppp">
                          <Link
                            to="/workerlogin"
                            className="text-white text-decoration-none font-weight-bold"
                          >
                            Log in
                          </Link>
                        </strong>
                      </p>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WorkerRegister;
