import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Foos from '../components/Foos';
import Foo from '../components/Foo';
import EditFoo from '../components/EditFoo';

class HomePage extends Component {
    static displayName = 'HomePage';

    componentDidMount() {
        API.trackPage('HomePage');
    }

    // Do server rendered actions such as fetching data here
    // static async getInitialProps({ Component, ctx }) {
    // }

    render() {
        return (
            <div className="container">
                <Foos/>
                <Foo id={1}/>
                <EditFoo id={1}/>
                <EditFoo/>
            </div>
        );
    }
}

export default withRouter(HomePage);
