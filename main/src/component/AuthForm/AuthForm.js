import React, {Component} from 'react';

export class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }
  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name] : value});
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState({username: '', password: ''});
  };

  render() {
    let {type} = this.props;
    type = type === 'signin' ? 'signin' : 'signup';

    return(
      <form onSubmit={this.handleSubmit}>
      <input
    name='username'
    placeholder='username'
    type='text'
    value={this.state.username}
    onChange={this.handleChange}
    />
    <input
    name='password'
    placeholder='password'
    type='password'
    value={this.state.password}
    onChange={this.handleChange}
    />
    <button type='submit'>{type}</button>
      </form>
  );
  }
}
