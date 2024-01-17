import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listOrders } from '../actions/orderActions';

function OrderListScreen({ history }) {
    const dispatch = useDispatch();

    // Récupération de la liste des commandes depuis le store Redux
    const orderList = useSelector(state => state.orderList);
    const { loading, error, orders } = orderList;

    // Récupération des informations de l'utilisateur connecté
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        // Vérification des droits d'administration de l'utilisateur
        if (userInfo && userInfo.isAdmin) {
            // Dispatch de l'action pour récupérer la liste des commandes
            dispatch(listOrders());
        } else {
            // Redirection vers la page de connexion si l'utilisateur n'est pas administrateur
            history.push('/login');
        }
    }, [dispatch, history, userInfo]);

    return (
        <div>
            <h1>Commandes</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>UTILISATEUR</th>
                            <th>DATE</th>
                            <th>Total</th>
                            <th>PAIEMENT</th>
                            <th>LIVRÉE</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map(order => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.user && order.user.name}</td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>{order.totalPrice} DT</td>

                                <td>
                                    {order.isPaid ? (
                                        order.paidAt.substring(0, 10)
                                    ) : (
                                        <i className='fas fa-check' style={{ color: 'red' }}></i>
                                    )}
                                </td>

                                <td>
                                    {order.isDelivered ? (
                                        order.deliveredAt.substring(0, 10)
                                    ) : (
                                        <i className='fas fa-check' style={{ color: 'red' }}></i>
                                    )}
                                </td>

                                <td>
                                    <LinkContainer to={`/order/${order._id}`}>
                                        <Button variant='light' className='btn-sm'>
                                            Détails
                                        </Button>
                                    </LinkContainer>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
}

export default OrderListScreen;
