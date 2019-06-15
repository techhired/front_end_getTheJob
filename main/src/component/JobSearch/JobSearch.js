import React from 'react';
import { connect } from 'react-redux';
//import JobSearchList from '../JobSearchList/JobSearchList';
import JobSearchForm from '../JobSearchForm/JobSearchForm';
import * as JobSearchActions from '../../action/jobSearch-actions';


export class JobSearch extends React.Component {

    handleJobRender = job => {
        return this.props.mappedJobCreates(job.title, job.location);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <ul>
                    <JobSearchForm onComplete={this.handleJobRender}/>
                    { this.props.jobSearch.map(current =>
                       <li>
                           <p>{current.title}</p><br/>
                           <p>{current.location}</p><br/>
                           <p>{current.summary}</p><br/>
                           <p>{current.date}</p><br/>
                           <p>{current.url}</p>
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