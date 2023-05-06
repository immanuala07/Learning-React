import React from "react";
import ReactDOM from "react-dom/client";

// Importing the component created in products-context.js
import ProductsProvider from "./context/products-context";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Wrapping the component created in products-context.js
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>
);
