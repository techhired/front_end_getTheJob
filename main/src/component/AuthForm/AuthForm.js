import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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
      <Grid container={true} direction='column' justify='center' alignItems='center' spacing={1} >
        <Grid item >
          <FormControl className={useStyles.margin} required='true' onSubmit={this.handleSubmit} >
            <TextField
              className={useStyles.textField}
              variant='filled'
              name='username'
              label='username'
              type='text'
              value={this.state.username}
              onChange={this.handleChange}
              margin='normal'
            />
          </FormControl>
        </Grid>
        <Grid item >
          <FormControl className={useStyles.margin} required='true' onSubmit={this.handleSubmit} >
            <TextField
              className={useStyles.textField}
              variant='filled'
              name='password'
              label='password'
              type='password'
              value={this.state.password}
              onChange={this.handleChange}
              margin='normal'
            />
          </FormControl>
        </Grid>
        <Grid item >
          <Button
            variant='contained'
            color='primary'
            type='submit'
          >{type}</Button>
         </Grid>
       </Grid>
    );
  }
}
