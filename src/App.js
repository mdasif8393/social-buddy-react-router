import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SinglePost from './components/SinglePost/SinglePost';


function App() {
  return (
    <Router>
      <Switch>

        <Route path = "/home">
          <Home />
        </Route>

        <Route exact path = "/">
          <Home />
        </Route>

        <Route path = "/post/:id">
          <SinglePost />
        </Route>

        <Route path = "*">
          <NotFound />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
