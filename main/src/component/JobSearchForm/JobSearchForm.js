import React, { Component } from 'react';
import './JobSearchForm.scss';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

let initialState = {title: '', location: ''};

export default class JobSearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      location: '',
    }
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(initialState);
  };

  render() {
    return(
      <Grid container={true} direction='column' justify='space-evenly' alignItems='center' alignContent='center' spacing={0} >
        <form style={{backgroundColor:'darkgray', height: '100%'}} onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
            placeholder='coding language'
          />
          <input
            type='text'
            name='location'
            value={this.state.location}
            onChange={this.handleChange}
            placeholder='zip code'
          />
          <Button variant='contained' color='primary' type='submit'>Search</Button>
        </form>
      </Grid>
    )
  }
}



