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
  Modal,
} from "react-bootstrap";
import { Link, useNavigate, Router } from "react-router-dom";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "bootstrap/dist/css/bootstrap.min.css";
import "./new-supplier.css";
import "./po-reduction.css";


export default function POReduction() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOnChange = () => {
    console.log('handled');
  };

  const handleSubmit = () => {
    console.log("saved")
  }

  return (
    
    <Form onSubmit={handleSubmit}>
    <Row xs={1} md={2} className="g-4">
      <CardGroup>
        <Card border="dark" >
          <Card.Body>
            <Card.Title className="text-center bg-secondary text-white rounded-1" >
              <div className="fs-6"><strong>Order Pickup Location (Requiered)</strong></div>
              <div className="fs-6"><small><em>Note: Mexican suppliers: Please enter US zip code</em></small></div>
            </Card.Title>
            <Card.Text>
              <Form.Group as={Row}>
                <Form.Label className="text-start text-danger fw-bold" column sm="6">
                  Select Country
                </Form.Label>
                <Col sm="6">
                  <Form.Select aria-label="Country list">
                    <option value="">Select country</option>
                    <option value="CA">Canada</option>
                    <option value="US">United States of America</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label className="text-start text-danger fw-bold" column sm="6">
                  Enter Zip/Postal Code
                </Form.Label>
                <Col sm="6">
                  <Form.Control type="Zipcode" placeholder="zip code"/>
                </Col>
              </Form.Group>
            </Card.Text>
            <Card.Footer className="text-center">
              <Button className="btn-sm" sm={3} type="submit" variant="outline-dark">Save Pickup Location</Button>
            </Card.Footer>
          </Card.Body>
          <Card.Body>
            <Card.Title className="text-center bg-secondary text-white rounded-1" >
              <div className="fs-6"><strong>For cargo originating in México</strong></div>
              <div className="fs-6"><small><em>Note: Please, ensure packaging meets EPNS packaging guidelines to protect your work</em></small></div>
            </Card.Title>
            <Card.Text>
              <Form.Group as={Row} className="mb-3">
                <Col sm="12">
                  <Form.Check
                    className="text-start"
                    inline
                    reverse
                    label="Please check if the parts are manufactured in México"
                    name="group1"
                    type={"checkbox"}
                    id="madeMx"
                  />
                </Col>
                <Col sm="6">
                  <Form.Label className="text-start text-danger " column md="12">
                    México -> US Pickup Location lead time
                  </Form.Label>
                </Col>
                <Col sm="2">
                  <Form.Control
                    value={0}
                    type="text"/>
                </Col>
                <Col sm="2">
                  <Form.Label className="text-start text-danger " column md="12">
                     days
                  </Form.Label>
                </Col>
              </Form.Group>
            </Card.Text>
            <Card.Footer className="text-center">
              <Button className="btn-sm" sm={3} type="submit" variant="outline-dark">Save/add lead time</Button>
            </Card.Footer>
          </Card.Body>
          <Card.Body>
            <Card.Title className="text-center bg-secondary text-white rounded-1">
              <div className="fs-6"><strong>Promise Date (Requiered)</strong></div>
            </Card.Title>
            <Card.Text>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="text-danger fw-bold" column sm="7">
                  Requiered Ship based on Promise entered
                </Form.Label>
                <Col sm="5">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker />
                    </DemoContainer>
                  </LocalizationProvider>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="text-danger fw-bold" column sm="7">
                  Enter Promised Date (TMNA receipt date)
                </Form.Label>
                <Col sm="5">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker/>
                    </DemoContainer>
                  </LocalizationProvider>
                </Col>
              </Form.Group>
              <Card.Footer className="text-center">
                <Button className="btn-sm" sm={3} type="submit" variant="outline-dark">Submit Promise Date</Button>
              </Card.Footer>
            </Card.Text>
          </Card.Body>
          <Row>
            <Col className="text-center">
              <Button className="btn-sm mb-4" sm="3" md="4" variant="dark" onClick={handleShow}>
                Add Supplier Internal Info (Optional)
              </Button>
            </Col>
          </Row>
          <Modal size="md" show={show} onHide={handleClose}>
            <Modal.Header  className="text-center gray-bg" closeButton>
              <Modal.Title>
                <div className="fs-6"><strong>Supplier Internal Use Only (Optional)</strong></div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="fw-bold" column sm="5">
                  Enter plant location
                </Form.Label>
                <Col sm="7">
                  <Form.Control
                    placeholder="*plant dropdown*"
                    type="text"/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="fw-bold" column sm="5">
                  Enter Supplier PN
                </Form.Label>
                <Col sm="7">
                  <Form.Control type="text" placeholder="Supplier PN"/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="fw-bold" column sm="5">
                  Enter a new comment
                </Form.Label>
                <Col sm="7">
                  <Form.Control type="text" as="textarea" rows={2} placeholder="Enter new comment (Optional)"/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="fw-bold" column sm="12">
                  Supplier comment history
                </Form.Label>
                <Col sm="12">
                  <Form.Control type="text" as="textarea" rows={7} placeholder="Supplier history"/>
                </Col>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn-sm mb-4" variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button className="btn-sm mb-4" variant="danger" onClick={handleClose}>
                Save 
              </Button>
            </Modal.Footer>
          </Modal>
        </Card>
      </CardGroup>
      </Row>
    </Form>
  );
};

 

 

 