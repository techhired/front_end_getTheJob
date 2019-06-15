import React from 'react';
import * as authActions from '../../action/auth-actions';
import { Link } from 'react-router-dom';
import { AuthForm } from '../AuthForm/AuthForm';
import { connect } from 'react-redux';

class Landing extends React.Component {

  handleSignUp = user => {
  return this.props.pDoSignUp(user);
};

handleSignIn = (user) => {
  return this.props.pDoSignIn(user.username, user.password);
};

render() {
  const signIn =
<div>
  <h1>Login</h1>
  <AuthForm type='signin' onComplete={this.handleSignIn}/>
  <Link to='/signup'>New user, click here to sign up</Link>
  </div>;

  const signUp =
<div>
  <h1>Sign Up</h1>
  <AuthForm type='signup' onComplete={this.handleSignUp}/>
  <Link to='/'>Already have an Account? Click here to login</Link>
  </div>;

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
