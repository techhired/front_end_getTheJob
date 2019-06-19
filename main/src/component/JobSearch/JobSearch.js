import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
//import JobSearchList from '../JobSearchList/JobSearchList';
import JobSearchForm from '../JobSearchForm/JobSearchForm';
import * as JobSearchActions from '../../action/jobSearch-actions';
import * as authAuctions from '../../action/auth-actions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import uuid from 'uuid';

export class JobSearch extends React.Component {



    handleJobRender = job => {
        if(job.title && job.location) {// validate if both inputs are filled
            return this.props.mappedJobCreates(job.title, job.location);
        }
        return false;
    };

    handleLogout = () => {
        return this.props.logOut();
    };

    render() {

        return (
            <div>
                <Button variant='contained' color='secondary' onClick={this.handleLogout}> Sign Out </Button>
                <Typography>
                <li>
                    <Link component={RouterLink} to="/myjobs"> My Jobs </Link>
                </li>
                </Typography>
                <ul>
                    <JobSearchForm onComplete={this.handleJobRender}/>
                    { this.props.jobSearch.map(current =>
                       <li key={uuid()}>
                           <p style={{ fontWeight: 'bold' }}>Organization: {current.organization}</p><br/>
                           <p>{current.title}</p><br/>
                           <p>{current.location}</p><br/>
                           <p>{current.summary}</p><br/>
                           <p>{current.created}</p><br/>
                       <br/><a href={current.url}>{current.url}</a><br/>
                       </li>
                    )
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        jobSearch: state.jobSearch,
        authAction: state.token
    }
};

const mapDispatchToProps = dispatch => {
    return {
        mappedJobCreates: (language, location) => {
            dispatch(JobSearchActions.loadJobSearch(language, location));
        },
        logOut: () => {
            dispatch(authAuctions.remove());
        },
    }

};


export default connect(mapStateToProps, mapDispatchToProps)(JobSearch);