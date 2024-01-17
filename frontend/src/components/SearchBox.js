import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

function SearchBox() {
    const [keyword, setKeyword] = useState('');
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`);
        } else {
            history.push(history.location.pathname);
        }
        setKeyword('');
    };

    const clearSearch = () => {
        setKeyword('');
    };

    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Control
                type="text"
                name="q"
                onChange={(e) => setKeyword(e.target.value)}
                value={keyword}
                className="mr-sm-1 ml-sm-5"
                placeholder="Search products..."
                autoFocus
            />

            {keyword && (
                <Button
                    type="button"
                    variant="light"
                    className="p-2"
                    onClick={clearSearch}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </Button>
            )}

            <Button type="submit" variant="outline-success" className="p-2">
                <FontAwesomeIcon icon={faSearch} />
            </Button>
        </Form>
    );
}

export default SearchBox;
