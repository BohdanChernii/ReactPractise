import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Products from './Products.jsx';
import Contacts from './Contacts.jsx';
import Home from './Home.jsx';
import PageNotFound from './PageNotFound.jsx';

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
