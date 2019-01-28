import React, { Component } from 'react';
import Header from './components/layout/Header';
import {Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Work from "./components/pages/Work";
import Todos from "./components/pages/Todos";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/todos/:name" component={Todos}/>
          <Route path="/work" component={Work}/>
        </div>


      </div>
    );
  }
}

export default App;
