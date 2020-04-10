import React from 'react';
import Search from '../src/screens/Search';
import List from '../src/screens/List';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/list" component={List} />
      </Switch>
    </Router>
  );
}

export default App;
