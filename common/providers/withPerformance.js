import React, { Component } from 'react';

const Profiler = React.Profiler;

export default (
  WrappedComponent,
  _id,
  remote,
  events = ['mount', 'update'],
) => {
  class HOC extends Component {
    static displayName = 'withPerformance';

    constructor(props) {
      super(props);
    }

    // id, // the "id" prop of the Profiler tree that has just committed
    // phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    // actualDuration, // time spent rendering the committed update
    // baseDuration, // estimated time to render the entire subtree without memoization
    // startTime, // when React began rendering this update
    // commitTime, // when React committed this update
    // interactions // the Set of interactions belonging to this update

    logMeasurement = async (id, phase, actualDuration) => {
      // see output during DEV
      if (!events.includes(phase)) {
        return;
      }
      if (actualDuration < 1) {
        return;
      }

      if (remote) {
        fetch(remote, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ value: actualDuration }),
        });
      }
    };

    render() {
      return (
          <Profiler id={_id} onRender={this.logMeasurement}>
              <WrappedComponent {...this.props} {...this.state} />
          </Profiler>
      );
    }
  }

  return HOC;
};
