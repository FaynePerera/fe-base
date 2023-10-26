import React, { useState, useEffect } from 'react'
import {
    Button,
    Row,
    Col,
    Ratio,
  } from "react-bootstrap";

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import UndoSharpIcon from '@mui/icons-material/UndoSharp';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Shipment = ({shipment}, key) => {
    const [ promiseDate, setPromiseDate ] = useState()

    const handleOneCopy = () => {
        setPromiseDate(shipment.shipduedate)
        console.log(shipment);
    }

    const handleUndo = () => {
        setPromiseDate("")
        console.log(shipment);
    }
    
    return (
        
            <tr key={key}>
                <td>{shipment.ship_suffix}</td>
                <td>{shipment.epns_seq}</td>
                <td>{shipment.shipqty}</td>
                <td>{shipment.requiredship}</td>
                <td>{new Date(shipment.shipduedate).toLocaleDateString()}</td>
                <td style={{"fontSize" : "2pts"}}>
                    {promiseDate? 
                        new Date(promiseDate).toLocaleDateString() 
                        :  
                        <LocalizationProvider  dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <Ratio aspectRatio={'3x2'}>
                                    <DatePicker  size="sm"/>
                                </Ratio>  
                            </DemoContainer>
                        </LocalizationProvider>
                    }
                </td>
                <td>{shipment.altpickupcountry || "Same"}</td>
                <td>{shipment.altpickupzip || "Same"}</td>
                <td>
                    <Row>
                        <Col sm="5" style={{"paddingLeft": "10px"}}>
                        <Button variant="outline-secondary" size="sm" onClick={() => handleOneCopy()}>
                    <ContentCopyIcon style={{"fontSize":"small"}}/>
                </Button>
                        </Col>
                        <Col sm="5" style={{"paddingLeft": "10px"}}>
                        <Button variant="outline-secondary" size="sm" onClick={() => handleUndo()}>
                    <UndoSharpIcon style={{"fontSize":"small"}}/>
                </Button>
                        </Col>
                    </Row>
                
                </td>
            </tr>
    )
}

export default Shipment