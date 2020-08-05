import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// eslint-disable-next-line no-unused-vars
import { AppActions } from "../app-actions";
import { AppState } from "../state-type";

const withWidgets = WrappedComponent => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponent);
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // getWidgets: AppActions.getWidgets,
    },
    dispatch
  );

function mapStateToProps(state: AppState) {
  const { widgets, widgetLoading, widgetError } = state;
  return { widgets, widgetLoading, widgetError };
}

export default withWidgets;
