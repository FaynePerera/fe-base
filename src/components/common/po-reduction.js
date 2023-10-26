import React, { useState, useEffect } from "react";
import {
  Accordion,
  Card,
  CardGroup,
  Container,
  Form,
  FormGroup,
  Button,
  Row,
  Col,
  Modal,
  Table,
} from "react-bootstrap";
import { Link, useNavigate, Router, json } from "react-router-dom";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import Shipment from "./shipment";

import "bootstrap/dist/css/bootstrap.min.css";
import "./new-supplier.css";
import "./po-reduction.css";


export default function POReduction() {
  const [podata, setPodata] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const url = 'https://v70epn01t.tmm.na.corp.toyota.com/EPNS-Service/api/po/PK5TLK41'

  const getPOData = async (url) => {

    const response = await fetch(url);

    const jsonData = await response.json();

    setPodata(jsonData);
  };

  useEffect(() => {

    getPOData(url);

  }, []);

  useEffect(() => {


  }, [podata]);

  const handleSubmit = () => {
    console.log("saved")
  }

  const handleBulkCopy = () => {
    console.log("bulk copy");
    if(podata.shipments){
      let podataTmp = podata;
      podataTmp.shipments.forEach(element => {
        element.promiseDate = element.shipduedate
      });
      setPodata(podataTmp)
      console.log(podata)
    }
  }

  return (
    <>
    
    <Form onSubmit={handleSubmit}>
      <Row xs={1} md={2} className="g-4">
        <Col md={6} >
          <Accordion defaultActiveKey="0" alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
              <Container>
                <Row>
                  <Col>TPAM, Inc</Col>
                  <Col>Supplier # M0230</Col>
                  <Col>
                    <Table className="text-end" striped bordered hover responsive>
                      <thead>
                        <tr>
                          <th>PR Number</th>
                          <th>Issue date</th>
                          <th>Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{podata.fullEPNSPrNo}</td>
                          <td>{new Date(podata.issue).toLocaleDateString()}</td>
                          <td>{podata.type}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Container>
                
              </Accordion.Header>
              <Accordion.Body>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Part Number</th>
                    <th>Description</th>
                    <th>PPR No.</th>
                    <th>Color</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{podata.partNo}</td>
                    <td>{podata.partName}</td>
                    <td>{podata.pprNo}</td>
                    <td>{podata.color}</td>
                  </tr>
                </tbody>
              </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
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
                  <Form.Label className="text-start text-danger fw-bold" column sm="3">
                    Select Country
                  </Form.Label>
                  <Col sm="3">
                    <Form.Select aria-label="Country list" value={podata.pickupCountry}>
                      <option value="">Select country</option>
                      <option value="CA">Canada</option>
                      <option value="US">United States of America</option>
                    </Form.Select>
                  </Col>
                  <Form.Label className="text-start text-danger fw-bold" column sm="4">
                    Enter Zip/Postal Code
                  </Form.Label>
                  <Col sm="2">
                    <Form.Control type="Zipcode" value={podata.pickupZip} placeholder="zip code"/>
                  </Col>
                </Form.Group>
                <Form.Group>
                  
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
                      value={podata.mexicoLead}
                      defaultValue={1}
                      type="number"/>
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
                {/* <Row>
                  <Col sm="12" md={{ span: 4, offset: 11 }}>
                    <Button variant="secondary" size="sm" onClick={()=> {handleBulkCopy()}}>
                      <CopyAllIcon />
                    </Button>
                  </Col>
                </Row> */}
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Ship Suffix</th>
                      <th>Seq</th>
                      <th>Qty</th>
                      <th>Req'd Ship</th>
                      <th>TMNA Due Date</th>
                      <th>Promise Date </th>
                      <th>Alt Pickup Country</th>
                      <th>Alt Pickup Zip</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {podata.shipments && podata.shipments.map((shipment, key) => {
                      console.log("render")
                      return <Shipment shipment={shipment} key={key} />
                    })}
                    
                  </tbody>
                </Table>
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
                  Closes
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
    </>
  );
};

 

 

 