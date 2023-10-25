import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import UserInfo from './components/common/user-info'
import NewSupplierUser from './components/common/add-new-supplier-user'
import POReduction from './components/common/po-reduction'
import Home from './components/home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/home" element={<Home />} />
                <Route path="/userinfo" element={<UserInfo />} />
                <Route path="/new-supplier-user" element={<NewSupplierUser />} />
                <Route path="/pr-info" element={<POReduction />} />
            </Route>
        </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
