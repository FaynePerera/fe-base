import React, { useState, useEffect } from 'react'
import {
    Button,
    Row,
    Col,
    Ratio,
    Form,
    Table,
  } from "react-bootstrap";

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Shipment = ({shipment}, key, showCols) => {
    //console.log(shipment)
    const [ promiseDate, setPromiseDate ] = useState()
    const [ show, setShow] = useState(showCols)

    const handleShow = () => {
        setShow(!show)
      }
      
    const handleOneCopy = () => {
        setPromiseDate(shipment.shipduedate)
    }

    const handleUndo = () => {
        setPromiseDate("")
    }

    return (
        <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Ship Suffix </th>
            <th>Qty</th>
            <th>Req'd Ship</th>
            <th>TMNA Due Date</th>
            <th>Promise Date </th>
            <th>Actions</th>
            {show &&
              <>
                <th>Alt Pickup Country</th>
                <th>Alt Pickup Zip</th>
              </>
            }
          </tr>
        </thead>
        <tbody>
        <tr key={key}>
                <td>{shipment.ship_suffix}-{shipment.epns_seq}</td>
                <td>{shipment.shipqty}</td>
                <td>{shipment.requiredship}</td>
                <td>{new Date(shipment.shipduedate).toLocaleDateString()}</td>
                <td style={{"fontSize" : "2pts"}}>
                    <LocalizationProvider  dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']} sx={{
                                    paddingTop: '2px',
                                    }}>
                            <Ratio aspectRatio={'1/3'}>
                                <DatePicker value={promiseDate} className="datepicker-po" size="sm"
                                />
                            </Ratio>  
                        </DemoContainer>
                    </LocalizationProvider>
                </td>
                <td>
                    <Row>
                        <Col sm="5" style={{"paddingLeft": "10px"}}>
                        <Button variant="outline-secondary" size="sm" onClick={() => handleOneCopy()}>
                    <ContentCopyIcon style={{"fontSize":"small"}}/>
                </Button>
                        </Col>
                        <Col sm="5" style={{"paddingLeft": "10px"}}>
                        <Button variant="outline-secondary" size="sm" onClick={() => handleShow()}>
                    <VisibilityIcon style={{"fontSize":"small"}}/>
                </Button>
                        </Col>
                    </Row>
                
                </td>
                {show &&
                    <>
                        <td>
                            <Form.Select aria-label="Country list" value={shipment.altpickupcountry}>
                                <option value="">Select country</option>
                                <option value="CA">Canada</option>
                                <option value="US">United States of America</option>
                            </Form.Select>
                        </td>
                        <td>
                            <Form.Control type="Zipcode" placeholder="zip code"/>
                        </td>
                    </>
                }
                
                
            </tr>
        </tbody>
        </Table>
        
            
    )
}

export default Shipment