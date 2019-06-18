import React, { Component } from 'react';

let initialState = {title: '', location: ''}
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
            <form onSubmit={this.handleSubmit}>
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
                <button type='submit'>Search</button>
            </form>
        )
    }
}



