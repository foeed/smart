import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams ,  Link  } from 'react-router-dom';
import { listProductsByType } from '../actions/productActions';
import { Container, Row, Col, Alert, Spinner , Button } from 'react-bootstrap'; // Import React Bootstrap components
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import CategoryMenu from '../components/menu';
import { listProducts } from '../actions/productActions';
const TypeScreen = () => {
    const { type } = useParams();
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProductsByType(type));
    }, [dispatch, type]);
   
    // Filter products based on the specified type
    const filteredProducts = products.filter(product => product.type.toLowerCase() === type.toLowerCase());

    return (
        <div className="home-screen">
        <Row>
          <Col md={3}>
            <div className="category-menu-box">
              <CategoryMenu />
            </div>
          </Col>
  
          <Col md={9}>
            <div className="product-carousel">
              {<ProductCarousel />}
            </div>
            </Col>
            <Container>
              <h2 className="mt-3">{`Products with type: ${type}`}</h2>
  
              {loading && <Spinner animation="border" role="status" className="mt-3">
                  <span className="visually-hidden">Loading...</span>
              </Spinner>}
  
              {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
  
              {filteredProducts.length === 0 && !loading && (
                  <Alert variant="info" className="mt-3">
                      No products found for this type.
                  </Alert>
              )}
  
              {filteredProducts.length > 0 && (
                  <Row className="mt-3">
                      {filteredProducts.map((product) => (
                          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                              <Product product={product} />
                          </Col>
                      ))}
                  </Row>
              )}
          </Container>
          
        </Row>
      </div>
    );
};

export default TypeScreen;
