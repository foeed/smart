import React, { useState, useEffect } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/category_menu/');
        const data = await response.json();

        if (typeof data === 'object' && data.title) {
          // Convert the object into an array with a single element
          setCategories([data]);
        } else if (Array.isArray(data)) {
          setCategories(data);
        } else {
          console.error('Invalid data format:', data);
        }
      } catch (error) {
        console.error('Error fetching category data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Nav className="category-menu">
      {categories.map((category, index) => (
        <NavDropdown key={index} title={<span className="category-title">{`${category.title} `}</span>}>
          {category.types && Array.isArray(category.types) ? (
            category.types.map((type, typeIndex) => (
                <NavDropdown.Item  

                    key={typeIndex}
                          onClick={() => history.push(`/type/${type}`)}
                        >
                          {type}
                </NavDropdown.Item>
              ))
          ) : (
            <NavDropdown.Item disabled>No items available</NavDropdown.Item>
          )}
        </NavDropdown>
      ))}
    </Nav>
  );
};

export default CategoryMenu;
