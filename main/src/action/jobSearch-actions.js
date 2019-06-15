import uuid from 'uuid/v1';
import superagent from "superagent";

// import fetch from "cross-fetch";

export const createJob = (title , location, summary, date = new Date(), url) => {
    return {

        type: 'JOB_SEARCH',
        payload: {
            id: uuid(),
            title,
            location,
            summary,
            date,
            url
        }
    }
};


export const createJob2 = (source) => {
    return {
        type: 'JOB_SEARCH',
        payload: [source]
    }
}


export const updateJob = (job) => {
    return {
        type: 'JOB_UPDATE',
        payload: job
    }
};

export const deleteJob = (job)  => {
    return {
        type: 'JOB_DELETE',
        payload: job
    }
};

export const loadJobSearch = (language, location) => store => {// add parameter <language> <location>
    const JOB_API = `https://data.usajobs.gov/api/Search?Keyword=${language}&LocationName=${location}`;

    return superagent.get(JOB_API)
        // .set('User-Agent', 'anthony.triplett1989@gmail.com')
        .set('Authorization-Key', 'CCdZnBDDxYXTDFmtDy61nJVi8yvC3QNhYFOIx72w9EE=')
        .then(response => {
            let mainRequest = response.body.SearchResult.SearchResultItems[0].MatchedObjectDescriptor;
            console.log(mainRequest);

            return store.dispatch(createJob(mainRequest.PositionTitle, mainRequest.PositionLocationDisplay, mainRequest.QualificationSummary, mainRequest.PublicationStartDate, mainRequest.PositionURI))
        })
        .catch(console.log);
};

// fetch(JOB_API, {
//     method: 'GET',
//     body: JSON.stringify(),
//     credentials: "same-origin", //include, same-origin
//     headers: {Accept: 'application/json', 'Content-Type': 'application/json',},
// })

