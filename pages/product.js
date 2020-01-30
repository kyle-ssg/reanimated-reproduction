import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Products from '../components/Products';
import Product from '../components/Product';
import EditProduct from '../components/EditProduct';

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
                <Products/>
                <Product id={1}/>
                <EditProduct id={1}/>
                <EditProduct/>
            </div>
        );
    }
}

export default withRouter(HomePage);
