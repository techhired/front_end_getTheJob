import React from 'react';
import { connect } from 'react-redux';
//import JobSearchList from '../JobSearchList/JobSearchList';
import JobSearchForm from '../JobSearchForm/JobSearchForm';
import * as JobSearchActions from '../../action/jobSearch-actions';
import uuid from 'uuid';


export class JobSearch extends React.Component {

    handleJobRender = job => {
        return this.props.mappedJobCreates(job.title, job.location);
    }

    render() {
        console.log(this.props.jobSearch)
        return (
            <div>
                <ul>
                    <JobSearchForm onComplete={this.handleJobRender}/>
                    { this.props.jobSearch.map(current =>
                       <li key={uuid()}>
                           <p>Organization: {current.MatchedObjectDescriptor.OrganizationName}</p><br/>
                           <p>{current.MatchedObjectDescriptor.PositionTitle}</p><br/>
                           <p>{current.MatchedObjectDescriptor.PositionLocationDisplay}</p><br/>
                           <p>{current.MatchedObjectDescriptor.UserArea.Details.JobSummary}</p><br/>
                           <p>{current.MatchedObjectDescriptor.PublicationStartDate}</p><br/>
                           <p>{current.MatchedObjectDescriptor.PositionURI}</p><br/>
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
    }
};

const mapDispatchToProps = dispatch => {
    return {
        mappedJobCreates: (language, location) => {
            dispatch(JobSearchActions.loadJobSearch(language, location))
        }
    }

    };


export default connect(mapStateToProps, mapDispatchToProps)(JobSearch);