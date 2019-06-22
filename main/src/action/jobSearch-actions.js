import superagent from "superagent";
import uuid from 'uuid';

export const createJob = (organization, title, location, summary, created = new Date(), url) => {
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

export const loadJobSearch = (language, location) => store => {

  const JOB_API = `https://data.usajobs.gov/api/Search?Keyword=${language}&LocationName=${location}`;

  return superagent.get(JOB_API)

    .set('Authorization-Key', 'CCdZnBDDxYXTDFmtDy61nJVi8yvC3QNhYFOIx72w9EE=')
    .then(response => {
      let mainRequest = response.body.SearchResult.SearchResultItems;

      return mainRequest.forEach(current => store.dispatch(createJob(current.MatchedObjectDescriptor.OrganizationName,
        current.MatchedObjectDescriptor.PositionTitle, current.MatchedObjectDescriptor.PositionLocationDisplay,
        current.MatchedObjectDescriptor.UserArea.Details.JobSummary, current.MatchedObjectDescriptor.PublicationStartDate,
        current.MatchedObjectDescriptor.PositionURI)))
    })
    .catch(console.log);
};


