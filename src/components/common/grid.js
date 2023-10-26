import React, { useState, useEffect } from 'react'
import {
    Button,
    Row,
    Col,
    Table,
  } from "react-bootstrap";
import CopyAllIcon from '@mui/icons-material/CopyAll';
import Shipment from "./shipment";

const ShipmentGrid = (shipmentsData) => {
    const [shipments, setShipments] = useState(shipmentsData.shipments)
    console.log(shipments);
    const [promiseDate, setPromiseDate] = useState("")

    const handleBulkCopy = () => {
        /*let tmp = shipments.map((shipment) => {
            shipment.promiseDate = shipment.shipduedate
        })
        setShipments(tmp)
        console.log(shipments)*/
    }



    return (
        <>
            <Row>
                <Col sm="12" md={{ span: 4, offset: 11 }}>
                    <Button variant="secondary" size="sm" className="mb-3 mt-3" onClick={()=> {handleBulkCopy()}}>
                    <CopyAllIcon />
                    </Button>
                </Col>
                </Row> 
                <Table striped bordered hover responsive>
                <thead>
                    <tr>
                    <th>Ship Suffix</th>
                    <th>Seq</th>
                    <th>Qty</th>
                    <th>Req'd Ship</th>
                    <th>TMNA Due Date</th>
                    <th>Promise Date </th>
                    <th>Alt Pickup Country</th>
                    <th>Alt Pickup Zip</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {shipments && shipments.map((shipment, key) => {
                    console.log(shipment)
                    return <Shipment shipment={shipment} key={key} />
                    })}
                    
                </tbody>
            </Table>
        </>
    )
}

export default ShipmentGrid