import React from 'react';
import JobSearch from '../JobSearch/JobSearch';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default class JobsSaved extends React.Component {

  render() {
    return (
      <div><h1> SAVED JOBS </h1>
        <Typography>
        <li>
          <Link component={RouterLink} to="/user"> Search Page </Link>
        </li>
        </Typography>
      </div>

    )
  }
}
