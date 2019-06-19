import React from 'react';
// import JobSearch from '../JobSearch/JobSearch';
import { Link} from 'react-router-dom';


export default class JobsSaved extends React.Component {

  render() {
    return (
      <div><h1> SAVED JOBS </h1>
        <li>
          <Link to="/user"> Search </Link>
        </li>
      </div>

    )
  }
}
