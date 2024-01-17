import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BsPerson, BsTruck, BsCreditCard, BsCheckCircle } from 'react-icons/bs';

function CheckoutSteps({ step1, step2, step3, step4 }) {

    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/login'>
                        <Nav.Link>
                            <BsPerson /> Connexion
                        </Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>
                        <BsPerson /> Connexion
                    </Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link>
                            <BsTruck /> Livraison
                        </Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>
                        <BsTruck /> Livraison
                    </Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link>
                            <BsCreditCard /> Paiement
                        </Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>
                        <BsCreditCard /> Paiement
                    </Nav.Link>
                )}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link>
                            <BsCheckCircle /> Passer la commande
                        </Nav.Link>
                    </LinkContainer>
                ) : (
                    <Nav.Link disabled>
                        <BsCheckCircle /> Passer la commande
                    </Nav.Link>
                )}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps;
