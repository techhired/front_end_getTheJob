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
        return (
            <div>
                <ul>
                    <JobSearchForm onComplete={this.handleJobRender}/>
                    {/*{ this.props.jobSearch.map(current =>*/}
                       {/*<li>*/}
                           {/*{current.title}*/}
                           {/*{current.location}*/}
                           {/*{current.description}*/}
                           {/*{current.created_at}*/}
                           {/*{current.url}*/}
                       {/*</li>*/}
                    {/*)*/}
                    {/*}*/}
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