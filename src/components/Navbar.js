import React, { Component } from 'react';
// eslint-disable-next-line
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom"


export default class Navbar extends Component {
  render() {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">News Hunt</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"        aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active"  href="/">Home</a>
            </li> */}
    
         
            {/* <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li> */}
            <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/entertainment">entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/general">general</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>
          
            {/* <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/business">business</a></li>
            <li className="nav-item"><a className="nav-link" href="/entertainment">entertainment</a></li>
            <li className="nav-item"><a className="nav-link" href="/general">general</a></li>
            <li className="nav-item"><a className="nav-link" href="/health">health</a></li>
            <li className="nav-item"><a className="nav-link" href="/science">science</a></li>
            <li className="nav-item"><a className="nav-link" href="/sports">sports</a></li>
            <li className="nav-item"><a className="nav-link" href="/technology">technology</a></li> */}
          
          </ul>
        </div>
  </div>
</nav>
    </div>;
  }
}
