import AccountStore from '../stores/account-store';

export default (WrappedComponent) => {
    class HOC extends React.Component {
        static displayName = 'withFoo';

        constructor(props) {
            super(props);
            ES6Component(this);
            this.listenTo(AccountStore, 'change', () => {
                this.setState({
                });
            });
            this.state = {
            };
        }

        render() {
            return (
                <WrappedComponent
                  ref="wrappedComponent"
                  {...this.props}
                  {...this.state}
                />
            );
        }
    }

    return HOC;
};
