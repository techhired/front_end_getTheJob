import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";

class AuthRedirect extends Component {
  render() {
    const {location, token} = this.props;
    const {pathname} = location;
    let destinationRoute = null;
    if(pathname === '/signup' || pathname === '/') {
      if (token) {
        destinationRoute = '/user';
      }
    } else if(!token) {
      destinationRoute= '/';
    }
    return(
      <div>
      {destinationRoute ? <Redirect to={destinationRoute}/> : undefined}
    </div>
  );
  }
}
const mapStateToProps = state => ({
  token: state.token,
});

export default connect(mapStateToProps)(AuthRedirect);
