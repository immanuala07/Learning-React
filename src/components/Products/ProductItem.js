import React from 'react';

import Card from '../UI/Card';
import './ProductItem.css';
import { useStore } from '../../hooks-store/store';

// Using React memo to avoid unnecessary re-render of component
const ProductItem = React.memo((props) => {
  // Acessing the updating function
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    console.log("Button clicked for toggleFavHandler!");
    // Dispatching action creator from the custom store
    dispatch('TOGGLE_FAV', props.id);
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
});

export default ProductItem;
