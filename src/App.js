import { Outlet } from "react-router";
import Navigation from "./components/navbar";
import {
    Container,
    Row, 
    Col,
  } from "react-bootstrap";

const App = () => {
    return (
        <div>
            <Navigation />
            <Container fluid="md">
                <Row>
                    <Col>
                        <Outlet />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default App;