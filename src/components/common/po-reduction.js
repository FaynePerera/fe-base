import React, { useState, useEffect } from "react";
import {
  Accordion,
  Card,
  CardGroup,
  Container,
  Form,
  Button,
  Row,
  Col,
  Modal,
  Ratio,
  Table,
  Badge,
  Stack,
} from "react-bootstrap";
import ShipmentGrid from "./grid";
import Shipment from "./shipment";
import CopyAllIcon from '@mui/icons-material/CopyAll';

import "bootstrap/dist/css/bootstrap.min.css";
import "./new-supplier.css";
import "./po-reduction.css";


export default function POReduction() {
  const [podata, setPodata] = useState({});
  const [shipments, setShipments] = useState([]);
  const [show, setShow] = useState(false);
  const [showCols, setShowCols] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowCols = () => {
    setShowCols(!showCols)
  }


  
  const url = 'https://v70epn01t.tmm.na.corp.toyota.com/EPNS-Service/api/po/PK5TLK41'

  const getPOData = async (url) => {

    const response = await fetch(url);

    const jsonData = await response.json();

    setPodata(jsonData);
    setShipments(jsonData.shipments)
  };

  useEffect(() => {

    getPOData(url);

  }, []);

  useEffect(() => {

  }, [podata, shipments]);

  const handleBulkCopy = () => {
    handleShow()
    let tmp = shipments
    tmp = tmp.map((shipment) => {
      //console.log(shipment);
      shipment.promiseDate = shipment.shipduedate
      return shipment
    })
    setShipments(tmp)
    console.log(shipments)
  }


  const handleSubmit = () => {
    console.log("saved")
  }


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row xs={1} md={3} className="g-4">
          <Col md={12} className="mb-1">
            <Accordion defaultActiveKey="0" >
              <Accordion.Item eventKey="0">
                <Accordion.Header className="pb-1">
                  <Container>
                    <Row>
                      <Col  md={12} className="mb-1">
                        <Stack direction="horizontal" gap={5}>
                          <h4>
                            Supplier <Badge bg="secondary">TPAM, Inc</Badge>
                          </h4>
                          <h4>
                            Supplier # <Badge bg="secondary">M0230</Badge>
                          </h4>
                          
                        </Stack>
                      </Col>
                      <Col>
                        <Table className="text-start mb-1" striped bordered hover responsive>
                          <thead>
                            <tr>
                              <th>PR Number</th>
                              <th>Issue date</th>
                              <th>Type</th>
                              <th>Part Number</th>
                              <th>Description</th>
                              <th>PPR No.</th>
                              <th>Color</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{podata.fullEPNSPrNo}</td>
                              <td>{new Date(podata.issue).toLocaleDateString() || ""}</td>
                              <td>{podata.type}</td>
                              <td>{podata.partNo}</td>
                              <td>{podata.partName}</td>
                              <td>{podata.pprNo}</td>
                              <td>{podata.color}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </Container> 
                </Accordion.Header>
                <Accordion.Body>
                <Form.Group as={Row}>
                    <Col className="text-start" sm="2">
                      <Form.Label className="text-danger fw-bold" column>
                        Enter plant location
                      </Form.Label>
                    </Col>
                    <Col sm="2">
                      <Form.Control
                        placeholder="Plant location"
                        type="text"/>
                    </Col>
                    <Col className="text-start" sm="2">
                      <Form.Label className="text-danger fw-bold" column>
                        Enter Supplier PN
                      </Form.Label>
                    </Col>
                    <Col sm="2">
                      <Form.Control type="text" placeholder="Supplier PN"/>
                    </Col>
                    <Col className="text-start" sm="2">
                      <Form.Label className="text-danger fw-bold" column>
                        Enter a new comment
                      </Form.Label>
                    </Col>
                    <Col sm="2">
                      <Form.Control type="text" as="textarea" rows={2} placeholder="Enter new comment (Optional)"/>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label className="text-start text-danger fw-bold" column>
                      Supplier comment history
                    </Form.Label>
                    <Col sm="12">
                      <Form.Control type="text" as="textarea" rows={3} placeholder="Supplier history"/>
                    </Col>
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row xs={1} md={12} className="g-4">
          <CardGroup>
            <Card border="dark" >
              <Card.Body>
                <Card.Title className="text-center bg-secondary text-white rounded-1" >
                  <div className="fs-6"><strong>Order Pickup Location (Required)</strong></div>
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
                  <Form.Group as={Row}>
                    <Col sm="4" style={{"paddingRight": "1px"}}>
                      <Form.Label className="text-start text-danger fw-bold" column md="12">
                        Please check if the parts are manufactured in México
                      </Form.Label>
                    </Col>
                    <Col sm="1" style={{"paddingLeft": "1px"}}>
                      <Form.Check
                        className="text-start mt-2 ml-1"
                        inline
                        reverse
                        name="madeMx"
                        type={"checkbox"}
                        id="madeMx"
                      />
                    </Col>
                    <Col sm="4">
                      <Form.Label className="text-end text-danger fw-bold" column md="12">
                        México -> US Pickup Location lead time
                      </Form.Label>
                    </Col>
                    <Col sm="1">
                      <Form.Control
                        value={podata.mexicoLead}
                        defaultValue={1}
                        type="number"/>
                    </Col>
                    <Col sm="2">
                      <Form.Label className="text-start text-danger fw-bold" column md="12">
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
                  <Row>
                    <Col sm="12" md={{ span: 4, offset: 11 }}>
                      <Button variant="secondary" size="sm" className="mb-3 mt-3" onClick={()=> {handleBulkCopy()}}>
                        <CopyAllIcon />
                      </Button>
                    </Col>
                  </Row>
                      {shipments && shipments.map((shipment, key) => {
                        console.log("render")
                        return <Shipment shipment={shipment} key={key} showCols={showCols}/>
                      })}
                  </Form.Group>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Button className="btn-sm" sm={3} type="submit" variant="outline-dark">Submit Promise Date</Button>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Row>
      </Form>
      <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Header  className="text-center gray-bg" closeButton>
          <Modal.Title>
            <div className="fs-6"><strong>Please confirm</strong></div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Would you like to set all shipment dates to the due date?
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-sm mb-4" variant="secondary" onClick={handleClose}>
            Acept
          </Button>
          <Button className="btn-sm mb-4" variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

 

 

 