import React, { useState } from "react";
import "./po-reduction.css";
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
import "bootstrap/dist/css/bootstrap.min.css";
import "./new-supplier.css";


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
      <CardGroup>
        <Card className="text-center">
          <Card.Body>
            <Card.Title className="bg-secondary text-white rounded-1" >
              <h4>Order Pickup Location (Requiered) </h4>
              <h6>Note: Mexican suppliers: Please enter US zip code</h6>
            </Card.Title>
            <Card.Text>
              <Form.Group as={Row}>
                <Form.Label className="text-start text-danger fw-bold" column sm="8">
                  Select Country
                </Form.Label>
                <Col sm="4">
                  <Form.Select aria-label="Country list">
                    <option value="">Select country</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AG">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AG">Antigua &amp; Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AA">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BL">Bonaire</option>
                    <option value="BA">Bosnia &amp; Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BR">Brazil</option>
                    <option value="BC">British Indian Ocean Ter</option>
                    <option value="BN">Brunei</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="IC">Canary Islands</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CD">Channel Islands</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CI">Christmas Island</option>
                    <option value="CS">Cocos Island</option>
                    <option value="CO">Colombia</option>
                    <option value="CC">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CT">Cote D'Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CB">Curacao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="TM">East Timor</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FA">Falkland Islands</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="FS">French Southern Ter</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GB">Great Britain</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GN">Guinea</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HW">Hawaii</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IA">Iran</option>
                    <option value="IQ">Iraq</option>
                    <option value="IR">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="NK">Korea North</option>
                    <option value="KS">Korea South</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Laos</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macau</option>
                    <option value="MK">Macedonia</option>
                    <option value="MG">Madagascar</option>
                    <option value="MY">Malaysia</option>
                    <option value="MW">Malawi</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="ME">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="MI">Midway Islands</option>
                    <option value="MD">Moldova</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Nambia</option>
                    <option value="NU">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="AN">Netherland Antilles</option>
                    <option value="NL">Netherlands (Holland, Europe)</option>
                    <option value="NV">Nevis</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NW">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau Island</option>
                    <option value="PS">Palestine</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PO">Pitcairn Island</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="ME">Republic of Montenegro</option>
                    <option value="RS">Republic of Serbia</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russia</option>
                    <option value="RW">Rwanda</option>
                    <option value="NT">St Barthelemy</option>
                    <option value="EU">St Eustatius</option>
                    <option value="HE">St Helena</option>
                    <option value="KN">St Kitts-Nevis</option>
                    <option value="LC">St Lucia</option>
                    <option value="MB">St Maarten</option>
                    <option value="PM">St Pierre &amp; Miquelon</option>
                    <option value="VC">St Vincent &amp; Grenadines</option>
                    <option value="SP">Saipan</option>
                    <option value="SO">Samoa</option>
                    <option value="AS">Samoa American</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome &amp; Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="OI">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syria</option>
                    <option value="TA">Tahiti</option>
                    <option value="TW">Taiwan</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania</option>
                    <option value="TH">Thailand</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad &amp; Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TU">Turkmenistan</option>
                    <option value="TC">Turks &amp; Caicos Is</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States of America</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VS">Vatican City State</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Vietnam</option>
                    <option value="VB">Virgin Islands (Brit)</option>
                    <option value="VA">Virgin Islands (USA)</option>
                    <option value="WK">Wake Island</option>
                    <option value="WF">Wallis &amp; Futana Is</option>
                    <option value="YE">Yemen</option>
                    <option value="ZR">Zaire</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label className="text-start text-danger fw-bold" column sm="8">
                  Enter Zip/Postal Code
                </Form.Label>
                <Col sm="4">
                  <Form.Control type="zipcode" placeholder="zip code"/>
                </Col>
              </Form.Group>
              <Button className="" sm={3} type="submit" variant="outline-dark">Save Pickup Location</Button>
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Title className="bg-secondary text-white rounded-1" >
              <h3>For cargo originating in México</h3>
              <h6>Note: Please, ensure packaging meets EPNS packaging guidelines to protect your work </h6>
            </Card.Title>
            <Card.Text>
              <Form.Group as={Row} className="mb-3">
                <Col sm="12" >
                  <Form.Check
                    inline
                    label="Please check if the parts are manufactured in México"
                    name="group1"
                    type={"checkbox"}
                    id="2"
                  />
                </Col>
                <Col sm="2">
                  <Form.Control
                    value="0 days"
                    type="text"/>
                </Col>
                <Form.Label className="text-end text-danger fw-bold" column md="5">
                  México -> US Pickup Location lead time
                </Form.Label>
                <Col sm="12">
                  <Button className="" sm={3} type="submit" variant="outline-dark">Save/add lead time</Button>
                </Col>
              </Form.Group>
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Title className="bg-secondary text-white rounded-1" >
              <h3>Promise Date (Requiered) </h3>
              <h6>Note: Mexican suppliers: Please enter US zip code</h6>
            </Card.Title>
            <Card.Text>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="text-end text-danger fw-bold" column sm="3">
                  Requiered Ship based on Promise entered
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    placeholder="convert to datepicker"
                    disabled
                    type="text"/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="text-end text-danger fw-bold" column sm="3">
                  Enter Promised Date (TMNA receipt date)
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    placeholder="convert to datepicker"
                    disabled
                    type="text"/>
                </Col>
              </Form.Group>
              <Button className="" sm={3} type="submit" variant="outline-dark">Submit Promise Date</Button>
            </Card.Text>
          </Card.Body>
          <Row>
            <Col>
              <Button className="mb-4" sm="3" md="4" variant="dark" onClick={handleShow}>
                Add Supplier Internal Info (Optional)
              </Button>
            </Col>
          </Row>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Supplier Internal Use Only (Optional)</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="fw-bold" column sm="4">
                  Enter plant location
                </Form.Label>
                <Col sm="6">
                  <Form.Control
                    placeholder="convert to dropdown"
                    type="text"/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="fw-bold" column sm="4">
                  Enter Supplier PN
                </Form.Label>
                <Col sm="6">
                  <Form.Control type="text" placeholder="Supplier PN"/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="fw-bold" column sm="4">
                  Enter a new comment
                </Form.Label>
                <Col sm="6">
                  <Form.Control type="text" placeholder="Enter new comment (Optional)"/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label className="fw-bold" column sm="4">
                  Supplier comment history
                </Form.Label>
                <Col sm="6">
                  <Form.Control type="text" placeholder="Supplier history"/>
                </Col>
              </Form.Group>
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
        </Card>
      </CardGroup>
    </Form>
  );
};

 

 

 