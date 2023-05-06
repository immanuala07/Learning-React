import React, { useContext } from 'react';

import Card from '../UI/Card';
import './ProductItem.css';
import { ProductsContext } from '../../context/products-context';

const ProductItem = props => {
  // Fetching the toggleFav function defined in the context (products-context.js)
  const toggleFav = useContext(ProductsContext).toggleFav;

  const toggleFavHandler = () => {
    console.log("Button clicked for toggleFavHandler!");
    // Calling the function defined in the context
    toggleFav(props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
