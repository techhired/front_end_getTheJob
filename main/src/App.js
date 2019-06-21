import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import AuthRedirect from './component/AuthRedirect/AuthRedirect';
import Landing from './component/Landing/Landing';
import JobSearch from '../src/component/JobSearch/JobSearch';
import JobsSaved from '../src/component/JobsSaved/JobsSaved';
// import './app.css'
import NavBar from '../src/component/NavBar/NavBar';
import Grid from '@material-ui/core/Grid';

export default class App extends Component {
  render() {
    return (
      <main id='main'>
        <BrowserRouter>
          <NavBar/>
          <Grid container={true} direction='column' justify='center' alignContent='center'>
            <Route path='*' component={AuthRedirect}/>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/user" component={JobSearch}/>
            <Route exact path="/signup" component={Landing}/>
            <Route exact path="/myjobs" component={JobsSaved}/>
          </Grid>
        </BrowserRouter>
    </main>
  );
  }
}
