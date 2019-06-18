import React from 'react';
import * as authActions from '../../action/auth-actions';
import { Link } from 'react-router-dom';
import { AuthForm } from '../AuthForm/AuthForm';
import { connect } from 'react-redux';
import { Grid } from "@material-ui/core";

class Landing extends React.Component {

  handleSignUp = user => {
    return this.props.pDoSignUp(user);
};

  handleSignIn = (user) => {
    return this.props.pDoSignIn(user.username, user.password);
};

render() {

  const signIn =
    <Grid container={true} direction='column' justify='space-evenly' alignItems='center' alignContent='center' spacing={0} >
      <Grid item>
        <h1>Login</h1>
      </Grid>
      <Grid item>
        <AuthForm type='signin' onComplete={this.handleSignIn}/>
      </Grid>
      <Grid item>
        <Link to='/signup'>New user, click here to sign up</Link>
      </Grid>
    </Grid>;

  const signUp =
    <Grid container={true} direction='column' justify='space-evenly' alignItems='center' spacing={0} >
      <Grid item >
        <h1>Sign Up</h1>
      </Grid>
      <Grid item>
        <AuthForm type='signup' onComplete={this.handleSignUp}/>
      </Grid>
      <Grid item>
        <Link to='/'>Already have an Account? Click here to login</Link>
      </Grid>
    </Grid>;

  const {location} = this.props;
  return(
    <div>
    <nav>
    {location.pathname === '/' ? signIn : undefined}
  {location.pathname === '/signup' ? signUp : undefined}
</nav>
  </div>
  );
  }
}

const mapDispatchToProps = dispatch => ({
  pDoSignUp: user => {
  return dispatch(authActions.signupRequest(user));
},
pDoSignIn: (username, password) => {
  return dispatch(authActions.signinRequest(username, password))
}
});

export default connect(null, mapDispatchToProps)(Landing);
