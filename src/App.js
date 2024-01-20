import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
