import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import JobSearchForm from '../JobSearchForm/JobSearchForm';
import * as JobSearchActions from '../../action/jobSearch-actions';
import * as authAuctions from '../../action/auth-actions';
import uuid from 'uuid';
import superagent from "superagent";

export class JobSearch extends React.Component {

    handleJobRender = job => {
        if(job.title && job.location) {
            return this.props.mappedJobCreates(job.title, job.location);
        }
        return false;
    };

    handleLogout = () => {
        return this.props.logOut();
    };

    addJob = (profile) => {
        return superagent.post('http://localhost:8000/save')
          .send(profile)
    };

    render() {
        console.log(this.props.jobSearch);
        return (
            <div>
                <button onClick={this.handleLogout}> Sign Out </button>
                <li>
                    <Link to="/myjobs"> My Jobs </Link>
                </li>
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
                       <button onClick={this.addJob.bind(null, current)}>Add Job</button>
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
