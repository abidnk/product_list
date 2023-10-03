import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

function App() {
  return (
    
      <div className="App">
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes> {/* Use 'element' prop instead of 'component' */}
      </div>
    
  );
}

export default App;
              