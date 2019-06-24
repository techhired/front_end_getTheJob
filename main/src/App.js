import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import AuthRedirect from './component/AuthRedirect/AuthRedirect';
import Landing from './component/Landing/Landing';
import JobSearch from '../src/component/JobSearch/JobSearch';
import JobsSaved from '../src/component/JobsSaved/JobsSaved';
import NavBar from '../src/component/NavBar/NavBar';

export default class App extends Component {
  render() {
    return (
      <main id='main'>
        <BrowserRouter>
          <NavBar/>

            <Route path='*' component={AuthRedirect}/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/user" component={JobSearch}/>
            <Route exact path="/signup" component={Landing}/>
            <Route exact path="/myjobs" component={JobsSaved}/>

        </BrowserRouter>
    </main>
  );
  }
}
