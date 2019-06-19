import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

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
        <Button variant='contained' color='primary' type='submit'>{type}</Button>
      </form>
    );
  }
}
