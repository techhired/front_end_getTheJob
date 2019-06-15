import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import AuthRedirect from './component/AuthRedirect/AuthRedirect';
import Landing from './component/Landing/Landing';
import JobSearch from '../src/component/JobSearch/JobSearch'

export default class App extends Component {
  render() {
    return (
      <main>
      <BrowserRouter>
      <h1>JobberWocky</h1>
    <Route path='/' component={AuthRedirect}/>
    <Route exact path="/user" component={JobSearch}/>
    <Route exact path="/signup" component={Landing}/>
    <Route exact path="/" component={Landing}/>
    </BrowserRouter>
    </main>
  );
  }
}
