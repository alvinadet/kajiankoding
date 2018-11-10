import React, { Component } from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './counter/Home';
import About from './counter/About';
import List from './counter/List';
import DetailList from './counter/DetailList';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Header} />
        </Switch>

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/list" component={List} />
          <Route path="/detail/:name" component={DetailList} />
        </Switch>
      </div>
    );
  }
}

export default App;
