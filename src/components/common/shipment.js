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
    //console.log(shipment)
    const [ promiseDate, setPromiseDate ] = useState()
    const [ showPromiseDate, setShowPromiseDate ] = useState(false)

    const handleOneCopy = () => {
        shipment.promiseDate = shipment.shipduedate
        setPromiseDate(shipment.shipduedate)
        console.log(shipment);
    }

    const handleUndo = () => {
        //shipment.promiseDate = ""
        delete shipment.promiseDate
        setPromiseDate("")
        console.log(shipment);
    }

    /*useEffect(() => {
        shipment.promiseDate = promiseDate
        //delete shipment.promiseDate
    },[promiseDate, shipment])*/

    return (
        
            <tr key={key}>
                <td>{shipment.ship_suffix}</td>
                <td>{shipment.epns_seq}</td>
                <td>{shipment.shipqty}</td>
                <td>{shipment.requiredship}</td>
                <td>{new Date(shipment.shipduedate).toLocaleDateString()}</td>
                <td style={{"fontSize" : "2pts"}}>
                    {showPromiseDate && new Date(promiseDate).toLocaleDateString()}
                    {shipment.promiseDate? 
                        new Date(shipment.promiseDate).toLocaleDateString() 
                        :  
                        !showPromiseDate && <LocalizationProvider  dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <Ratio aspectRatio={'3x2'}>
                                    <DatePicker  size="sm" onAccept={(newVal)=> {
                                        console.log(newVal.$d)
                                        setPromiseDate(newVal.$d)
                                        setShowPromiseDate(true)
                                        shipment.promiseDate = promiseDate
                                    }}/>
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