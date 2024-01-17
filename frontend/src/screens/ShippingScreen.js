import React, { useState, useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveShippingAddress } from '../actions/cartActions';

function ShippingScreen({ history }) {
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;

    const dispatch = useDispatch();

    const [address, setAddress] = useState(shippingAddress.address || '');
    const [city, setCity] = useState(shippingAddress.city || '');
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || '');
    const [country, setCountry] = useState(shippingAddress.country || '');

    const submitHandler = e => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode, country }));
        history.push('/payment');
    };

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 />
            <h1>Livraison</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='address'>
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Saisir adresse '
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>Ville</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Saisir la ville'
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId='postalCode'>
                    <Form.Label>Code Postal</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Saisir le code postal'
                        value={postalCode}
                        onChange={e => setPostalCode(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId='country'>
                    <Form.Label>Pays</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Saisir le pays'
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    />
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Continuer
                </Button>
            </Form>
        </FormContainer>
    );
}

export default ShippingScreen;
