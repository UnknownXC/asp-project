import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <footer id='footer'
            style={{
                width: "100%",
                position: "inline",
                bottom: 0,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Container>
                <Row>
                    <div className="footer container">Copyright &copy; 2022 GrabJobs. All rights reserved.</div>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
