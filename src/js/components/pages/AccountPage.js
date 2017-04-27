import React, {Component} from 'react';
import {Link} from 'react-router';

export default class AccountPage extends Component {
  render () {
    return (
      <div className='container app-container text-center'>
        <h1>You are logged in!</h1>
        <hr />
        <Link to='/'>Back To Home View</Link>
      </div>
    );
  }
}
