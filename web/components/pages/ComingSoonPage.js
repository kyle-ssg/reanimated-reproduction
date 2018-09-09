import React, {Component, PropTypes} from 'react';
export default hot(module)(class NotFoundView extends Component {

    componentDidMount = () => {
        API.trackPage(Constants.pages.NOT_FOUND);
    };

    render() {
        return (
            <div className='container app-container text-center'>
                <h3>Coming Soon</h3>
			</div>
        );
    }
});
