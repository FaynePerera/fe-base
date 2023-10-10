import React, { useState } from "react";
import {
  Card,
  CardGroup,
  Container,
  Form,
  FormGroup,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { Link, useNavigate, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./new-supplier.css";

export default function NewSupplierUser() {

  const [username, setUsername] = useState("fperera");
  const [firstname, setFirstname] = useState("Fayne");
  const [lastname, setLastname] = useState("Perera");
  const [address, setAddress] = useState("Av 37");
  const [title, setTitle] = useState("supplier");
  const [city, setCity] = useState("Sacramento");
  const [state, setState] = useState("CA");
  const [zip, setZip] = useState("34567");
  const [phone, setPhone] = useState("555-777-9999");
  const [cellphone, setCellphone] = useState("");
  const [fax, setFax] = useState("3456-789-2344");
  const [email, setEmail] = useState("mail@mail.com");
  sessionStorage.setItem("username", username);
  const uname = sessionStorage.getItem("username");
  console.log(uname);

  const handleOnChange = () => {
    console.log('handled');
  };

  //navegação
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    await sessionStorage.setItem("username", JSON.stringify(username));
    await sessionStorage.setItem("firstname", JSON.stringify(firstname));
    await sessionStorage.setItem("lastname", JSON.stringify(lastname));
    await sessionStorage.setItem("address", address);

    navigate("/dados");
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <CardGroup>
        <Card className="text-center">
          <Card.Body>
            <Card.Title className="bg-secondary text-white rounded-1" >
              <h3>User information</h3>
            </Card.Title>
            <Card.Text>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="text-end text-danger fw-bold" column sm="3">
                  Username
                </Form.Label>
                <Col sm="5">
                  <Form.Control 
                    value={username}
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}/>
                </Col>
              </Form.Group>
              <Col  md={{ span: 3, offset: 3 }} sm="10" className="mb-3">
                  <Form.Check 
                  type={'checkbox'}
                  id={`default-${'checkbox'}`}
                  label={`default ${'checkbox'}`}
                />
              </Col>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="text-end text-danger fw-bold" column sm="3">
                  Password
                </Form.Label>
                <Col sm="5">
                  <Form.Control type="password"/>
                </Col>
                <Col sm={4}>
                  <small className="text-muted">Min 8 chars</small>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="text-end text-danger fw-bold" column sm="3">
                  Re-enter Password
                </Form.Label>
                <Col sm="5">
                  <Form.Control type="password"/>
                </Col>
                <Col sm={4}>
                  <small className="text-muted">Min 8 chars</small>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="text-end text-danger fw-bold" column sm="3">
                  First Name
                </Form.Label>
                <Col sm="5">
                  <Form.Control 
                    value={firstname}
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="text-end text-danger fw-bold" column sm="3">
                  Last Name
                </Form.Label>
                <Col sm="5">
                  <Form.Control 
                    value={lastname}
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="text-end text-danger fw-bold" column sm="3">
                  Title
                </Form.Label>
                <Col sm="5">
                  <Form.Control 
                    value={title}
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="text-end fw-bold text-secondary" column sm="3">
                  Address
                </Form.Label>
                <Col sm="5">
                  <Form.Control 
                    value={address}
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}/>
                </Col>
                <Col sm={4}>
                  <small className="text-secondary">Required for Primary Prototipe</small>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="text-end fw-bold text-secondary" column sm="3">
                  City
                </Form.Label>
                <Col sm="5">
                  <Form.Control 
                    value={city}
                    type="text"
                    onChange={(e) => setCity(e.target.value)}/>
                </Col>
                <Col sm={4}>
                  <small className="text-secondary">Required for Primary Prototipe</small>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="text-end fw-bold text-secondary" column sm="3">
                  State
                </Form.Label>
                <Col sm="5">
                  <Form.Control 
                    value={state}
                    type="text"
                    onChange={(e) => setState(e.target.value)}/>
                </Col>
                <Col sm={4}>
                  <small className="text-secondary">Required for Primary Prototipe</small>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="text-end fw-bold text-secondary" column sm="3">
                  Zip
                </Form.Label>
                <Col sm="5">
                  <Form.Control 
                    value={zip}
                    type="text"
                    onChange={(e) => setZip(e.target.value)}/>
                </Col>
                <Col sm={4}>
                  <small className="text-secondary">Required for Primary Prototipe</small>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="text-end text-danger fw-bold" column sm="3">
                  Phone
                </Form.Label>
                <Col sm="5">
                  <Form.Control 
                    value={phone}
                    type="text"
                    onChange={(e) => setPhone(e.target.value)}/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="text-end fw-bold text-secondary" column sm="3">
                  Cellphone
                </Form.Label>
                <Col sm="5">
                  <Form.Control 
                    value={cellphone}
                    type="text"
                    onChange={(e) => setCellphone(e.target.value)}/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="text-end fw-bold text-secondary" column sm="3">
                  Fax
                </Form.Label>
                <Col sm="5">
                  <Form.Control 
                    value={fax}
                    type="text"
                    onChange={(e) => setFax(e.target.value)}/>
                </Col>
                <Col sm={4}>
                  <small className="text-secondary">Required for Primary Prototipe</small>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="text-end text-danger fw-bold" column sm="3">
                  Email
                </Form.Label>
                <Col sm="5">
                  <Form.Control 
                    value={email}
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}/>
                </Col>
              </Form.Group>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Body>
            <Card.Title className="bg-secondary text-white rounded-1">
              <h3>Permissions</h3>
            </Card.Title>
            <Card.Text>
              <Form.Group as={Row} className="mb-3">
                <Col sm="5">
                  <Form.Select size="sm">
                    <option>No access</option>
                    <option>View and edit</option>
                  </Form.Select>
                </Col>
                <Form.Label className="text-start text-secondary fw-bold" column sm="7">
                  PPDR
                </Form.Label>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col sm="5">
                  <Form.Select size="sm">
                    <option>No access</option>
                    <option>View and edit</option>
                  </Form.Select>
                </Col>
                <Form.Label className="text-start text-secondary fw-bold" column sm="7">
                  Contact info (Add, Edit, Delete)
                </Form.Label>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col sm="5">
                  <Form.Select size="sm">
                    <option>No access</option>
                    <option>View and edit</option>
                  </Form.Select>
                </Col>
                <Form.Label className="text-start text-secondary fw-bold" column sm="7">
                  Quality (PCS) Access
                </Form.Label>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Col sm="5">
                  <Form.Select size="sm">
                    <option>No access</option>
                    <option>View and edit</option>
                  </Form.Select>
                </Col>
                <Form.Label className="text-start text-secondary fw-bold" column sm="7">
                  Quality (Other) Access
                </Form.Label>
              </Form.Group>
            </Card.Text>
            <Card.Title>
              <h3 className="bg-secondary text-white rounded-1">User is Contact as (Optional)</h3>
            </Card.Title>
            <Card.Text>
              <Form.Group as={Row} className="mb-3 text-start" >
                <Col sm="12" md={{ span: 7, offset: 3 }}>
                  <Form.Check
                    inline
                    label="Primary Prototipe"
                    name="group1"
                    type={"checkbox"}
                    id="1"
                  />
                </Col>
                <Col sm="12" md={{ span: 7, offset: 3 }}>
                  <Form.Check
                    inline
                    label="Secondary Prototipe"
                    name="group1"
                    type={"checkbox"}
                    id="2"
                  />
                </Col>
                <Col sm="12" md={{ span: 7, offset: 3 }}>
                  <Form.Check
                    inline
                    label="Quality Prototipe"
                    name="group1"
                    type={"checkbox"}
                    id="3"
                  />
                </Col>
              </Form.Group>
            </Card.Text>
            <Col sm="6" className="bottom-element text-end">
              <Button className="" sm={3} type="submit" variant="outline-dark">Add user</Button>
            </Col>
          </Card.Body>
        </Card>
      </CardGroup>
    </Form>
  );
};


