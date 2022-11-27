import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

export default class App extends Component {
  render() {

    return (
      <div>
      <Router>
        <Navbar/>
        {/* <News key="about" pageSize={6} country="us" category="science"/> */}
        <Switch>
        
        <Route exact path="/"><News key="about" pageSize={6} country="us" category="about"/></Route>
        <Route exact path="/business"><News key="business"pageSize={6} country="us" category="business"/></Route>
        <Route exact path="/entertainment"><News key="entertainment" pageSize={6} country="us" category="entertainment"/></Route>
        <Route exact path="/general"><News key="general" pageSize={6} country="us" category="general"/></Route>
        <Route exact path="/health"><News key="health" pageSize={6} country="us" category="health"/></Route>
        <Route exact path="/science"><News key="science" pageSize={6} country="us" category="science"/></Route>
        <Route exact path="/sports"><News key="sports" pageSize={6} country="us" category="sports"/></Route>
        <Route exact path="/technology"><News key="technology" pageSize={6} country="us" category="technology"/></Route>
        </Switch> 
       </Router>
      </div>
    

    )}}

