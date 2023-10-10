import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
import UserInfo from './components/common/user-info'
import NewSupplierUser from './components/common/add-new-supplier-user'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./App.css";

export default function App() {

  ReactSession.setStoreType("localStorage");
  ReactSession.set("userInfoForm", {name:"Fayne",lastname:"Perera"});

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
              </Row>
            </Container>
          </div>
      </Router>
    </>
  );
}
