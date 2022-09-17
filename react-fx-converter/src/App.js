import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Layout from './Layout';

import './App.css';

const NotFound = () => {
  return <h2>404 Not Found</h2>;
}

const App = () => {
  return (
    <Router basename="/react-fx-converter">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Currency Converter</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Layout} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;