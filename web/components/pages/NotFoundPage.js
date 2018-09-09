import React, {Component} from 'react';

export default hot(module)(class NotFoundView extends Component {

    displayName = 'NotFoundPage';

    componentDidMount = () => {
        API.trackPage(Constants.pages.NOT_FOUND);
    };

    render() {
        return (
            <div className='container app-container text-center'>
                <h1>Oops, we can't seem to find this page!</h1>
                <hr/>
                <Link to='/'>Back To Home View</Link>
            </div>
        );
    }
});
