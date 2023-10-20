import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
import UserInfo from './components/common/user-info'
import NewSupplierUser from './components/common/add-new-supplier-user'
import POReduction from './components/common/po-reduction'

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

import "./App.css";

export default function App() {

  ReactSession.setStoreType("localStorage");
  ReactSession.set("userInfoForm", {name:"Fayne",lastname:"Perera"});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Router>
          <div>
            <nav>
                <ul>
                  <li>
                      <Link to="/userinfo">User Information</Link>
                  </li>

                  <li>
                      <Link to="/new-supplier-user">Add New Supplier User</Link>
                  </li>
                    <Row>
                      <Col>
                        <Button className="mb-4" sm="3" md="4" variant="dark" onClick={handleShow}>
                          Add Supplier Internal Info (Optional)
                        </Button>
                      </Col>
                    </Row>
                </ul>
            </nav>

            <Container className="App">
              <Row>
                <Routes>
                    <Route path="/userinfo" element={<div><UserInfo /></div>} />
                </Routes>
                <Routes>
                    <Route path="/new-supplier-user" element={<div><NewSupplierUser /></div>} />
                </Routes>
                <Routes>
                    <Route path="/pr-info" element={<div><POReduction /></div>} />
                </Routes>
              </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Supplier Internal Use Only (Optional)</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <POReduction />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save 
              </Button>
            </Modal.Footer>
          </Modal>
          </div>
      </Router>
    </>
  );
}
