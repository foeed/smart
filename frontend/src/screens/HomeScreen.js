import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import CategoryMenu from '../components/menu';
import { listProducts } from '../actions/productActions';

function HomeScreen({ history }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;

  let keyword = history.location.search;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

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
          <div className="latest-products">
            {loading && <Loader />}
  
            {error && <Message variant="danger">{error}</Message>}
  
            {!loading && !error && products.length === 0 && (
              <Message>No products found.</Message>
            )}
  
            {!loading && !error && products.length > 0 && (
              <>
                <Row>
                  {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                      <Product product={product} />
                    </Col>
                  ))}
                </Row>
  
                <Paginate page={page} pages={pages} keyword={keyword} />
              </>
            )}
          </div>
        
      </Row>
    </div>
  );
}

export default HomeScreen;
