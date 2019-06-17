import React from 'react';
import { connect } from 'react-redux';
//import JobSearchList from '../JobSearchList/JobSearchList';
import JobSearchForm from '../JobSearchForm/JobSearchForm';
import * as JobSearchActions from '../../action/jobSearch-actions';
import * as authAuctions from '../../action/auth-actions';
import uuid from 'uuid';

let title, location;
export class JobSearch extends React.Component {

    handleJobRender = job => {
        if(title != job.title || location != job.location) {
            return this.props.mappedJobCreates(job.title, job.location), title = job.title, location = job.location;
        }
        return null;
    };

    handleLogout = () => {
        return this.props.logOut();
    };

    render() {
        return (
            <div>
                <button onClick={this.handleLogout}> Sign Out </button>
                <ul>
                    <JobSearchForm onComplete={this.handleJobRender}/>
                    { this.props.jobSearch.map(current =>
                       <li key={uuid()}>
                           <p style={{ fontWeight: 'bold' }}>Organization: {current.MatchedObjectDescriptor.OrganizationName}</p><br/>
                           <p>{current.MatchedObjectDescriptor.PositionTitle}</p><br/>
                           <p>{current.MatchedObjectDescriptor.PositionLocationDisplay}</p><br/>
                           <p>{current.MatchedObjectDescriptor.UserArea.Details.JobSummary}</p><br/>
                           <p>{current.MatchedObjectDescriptor.PublicationStartDate}</p><br/>
                       <br/><a href={current.MatchedObjectDescriptor.PositionURI}>{current.MatchedObjectDescriptor.PositionURI}</a><br/>
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
            console.log(language)
            dispatch(JobSearchActions.loadJobSearch(language, location));
        },
        logOut: () => {
            dispatch(authAuctions.remove());
        },
    }

};


export default connect(mapStateToProps, mapDispatchToProps)(JobSearch);