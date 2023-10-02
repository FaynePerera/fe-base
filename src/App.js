import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { ReactSession } from 'react-client-session';
import UserInfo from './components/user-info'

import "./App.css";

export default function App() {

  ReactSession.setStoreType("localStorage");
  ReactSession.set("userInfo", {name:"Fayne",lastname:"Perera"});

  return (
    <>
    <Router>
          <div>
            <nav>
                <ul>
                  <li>
                      <Link to="/userinfo">User Information</Link>
                  </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/userinfo" element={<UserInfo />} />
            </Routes>
          </div>
      </Router>
    </>
  );
}
