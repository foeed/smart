import React from 'react';
import { Image, Carousel } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';

function ProductCarousel() {
  const localImageContext = require.context('../images', false, /\.(jpg|jpeg|png)$/);
  const localImagePaths = localImageContext.keys();

  return (
    <Carousel pause='hover'className='bg-dark' interval={5000}>
      {localImagePaths.length === 0 ? (
        <Message variant='info'>No local images found.</Message>
      ) : (
        localImagePaths.map((imagePath, index) => (
          <Carousel.Item key={index}>
            <Image
              src={localImageContext(imagePath).default}
              alt={`Local Image ${index}`}
            
            />
          </Carousel.Item>
        ))
      )}
    </Carousel>
  );
}

export default ProductCarousel;
