import './App.css';
import React from "react";
import APICreate from './component/API_Create';
import APIRead from './component/API_Read';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-light px-2">
          <a className="navbar-brand" href="#">CRUD</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Create</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/read">Read</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/update">Update</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/delete">Delete</a>
              </li>
            </ul>
          </div>
        </nav>
        <Router>
          <Route exact path="/" component={APICreate} />
          <Route path="/read" component={APIRead} />
        </Router>
      
    </div>
  );
}

export default App;
