import React, { useState } from "react";

export const ProductsContext = React.createContext({
  // Setting the default value for React context
  products: [],
});

// Creating and exporting the component
export default (props) => { // eslint-disable-line import/no-anonymous-default-export

  // useState hookis used to set the value for productList
  const [productList, setProductsList] = useState([ // eslint-disable-line no-unused-vars
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    }
  ]);

  return (
    // Setting the state value to React context by using the React Context Provider
    <ProductsContext.Provider value={{ products: productList }}>
      {/* Below children is used to wrap the other components */}
      {props.children}
    </ProductsContext.Provider>
  );
};
