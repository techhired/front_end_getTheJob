import uuid from 'uuid/v1';
import superagent from "superagent";

import fetch from "cross-fetch";

export const createJob = (jobTitle , location, summary, date = new Date(), url) => {
    return {

        type: 'JOB_SEARCH',
        payload: {
            id: uuid(),
            jobTitle,
            location,
            summary,
            date,
            url
        }
    }
};


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
    const JOB_API = `https://jobs.github.com/positions.json?description=${language}&full_time=true&location=${location}`;

    return superagent.get(JOB_API)
        .then(response => {
            return store.dispatch(createJob(response.title, response.location, response.description, response.create_at, response.url))
        })
        .catch(console.log);
};

// fetch(JOB_API, {
//     method: 'GET',
//     body: JSON.stringify(),
//     credentials: "same-origin", //include, same-origin
//     headers: {Accept: 'application/json', 'Content-Type': 'application/json',},
// })

