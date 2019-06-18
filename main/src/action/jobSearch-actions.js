import superagent from "superagent";
import uuid from 'uuid';

// import fetch from "cross-fetch";

export const createJob = (organization, title, location, summary, created=new Date(), url) => {
    return {
        type: 'JOB_SEARCH',
        payload: {
            id: uuid(),
            organization,
            title,
            location,
            summary,
            created,
            url
        }
    }
};

// export const updateJob = (job) => {
//     return {
//         type: 'JOB_UPDATE',
//         payload: job
//     }
// };
//
// export const deleteJob = (job)  => {
//     return {
//         type: 'JOB_DELETE',
//         payload: job
//     }
// };

export const loadJobSearch = (language, location) => store => {// add parameter <language> <location>

    const JOB_API = `https://data.usajobs.gov/api/Search?Keyword=${language}&LocationName=${location}`;

    return superagent.get(JOB_API)

        .set('Authorization-Key', 'CCdZnBDDxYXTDFmtDy61nJVi8yvC3QNhYFOIx72w9EE=')
        .then(response => {
            let mainRequest = response.body.SearchResult.SearchResultItems;
            return mainRequest.forEach(current => store.dispatch(createJob(current)))// mainRequest is an array with objects with data, that's why we use map to dispatch each object to store
        })
        .catch(console.log);
};


