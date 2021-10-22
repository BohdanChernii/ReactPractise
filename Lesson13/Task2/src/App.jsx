import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Products from './Products.jsx';
import Navigation from './Navigation.jsx';
import Home from './Home.jsx';

function App() {
  return (
    <div className="page">
      <BrowserRouter>
            <Navigation />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
      </BrowserRouter>
    </div>
  );
}
export default App;
