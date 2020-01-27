export default (WrappedComponent) => {
    class HOC extends React.Component {
        static displayName = 'withFoo';

        constructor(props) {
            super(props);
            this.state = {};
        }

        componentWillMount() {
            if (!this.props.user) {
                debugger;
            }
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
