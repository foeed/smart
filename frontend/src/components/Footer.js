import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <p>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className="mr-3" />
                            </a>
                            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp} className="mr-3" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="mr-3" />
                            </a>
                        </p>
                        <p>&copy; 2023 foeedrs. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
