
import './App.css';


import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageNos = 12
  render() {
    return (
      <div>
        <Router>  
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element = {<News key="general" pageSize={this.pageNos} country = 'in' category = 'general'top ="General" />} >  </Route>
            <Route exact path="/Business" element = {<News key="business" pageSize={this.pageNos} country = 'in' category = 'business' top ="Business"  />} >  </Route>
            <Route exact path="/Entertainment" element = { <News key="entertainment" pageSize={this.pageNos} country = 'in' category = 'entertainment' top="Entertainment" />} > </Route>
            <Route exact path="/Health" element = {<News key="health" pageSize={this.pageNos} country = 'in' category = 'health' top ="Health" />} >  </Route>
            <Route exact path="/Science" element = {<News key="science" pageSize={this.pageNos} country = 'in' category = 'science' top="Science" />} >  </Route>
            <Route exact path="/Sports" element = {<News key="sports" pageSize={this.pageNos} country = 'in' category = 'sports' top="Sports" /> } > </Route>
            <Route exact path="/Technology" element = {<News key="technology" pageSize={this.pageNos} country = 'in' category = 'technology' top="Technology" />} >  </Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
