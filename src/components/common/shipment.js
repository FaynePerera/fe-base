import React, { useState, useEffect } from 'react'
import {
    Button,
    Row,
    Col,
  } from "react-bootstrap";

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import UndoSharpIcon from '@mui/icons-material/UndoSharp';

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
                <td>{promiseDate? new Date(promiseDate).toLocaleDateString() : ""}</td>
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