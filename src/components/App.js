import React, { Component } from "react";
import logo from "./img/ZigzagWindyBlackfly-small.gif";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "./App.css";
import Catalogue from "./Catalogue";
import Lesson from "./Lesson";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">みんなの日本語</h1>
          </header>
          <Switch>
            <Route path="/catalogue" component={Catalogue} />
            <Route path="/lesson/:id" component={Lesson} />
            <Redirect from="/" to="/catalogue" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
