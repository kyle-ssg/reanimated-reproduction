import React from 'react';

import withAuth from '../common/providers/withAuth';

const withUserRedirect = (WrappedComponent) => {
    class HOC extends React.Component {
        static displayName = 'withFoo';

        constructor(props) {
            super(props);
            this.state = {};
            if (!props.user && typeof window !== 'undefined') {
                props.router.replace(`/login?redirect=${document.location.pathname}`);
            }
        }

        render() {
            if (!this.props.user) {
                return <div/>
            }
            return (
                <WrappedComponent
                  ref="wrappedComponent"
                  {...this.props}
                  {...this.state}
                />
            );
        }
    }

    return withAuth(HOC);
};

export default withUserRedirect;
