import React, { PureComponent } from "react";
import propTypes from "prop-types";

class SegmentControl extends PureComponent {
  static displayName = "SegmentControl";

  static propTypes = {
    options: propTypes.arrayOf(
      propTypes.shape({
        key: propTypes.string.isRequired,
        name: propTypes.string,
        selected: propTypes.bool,
      })
    ),
    onChange: propTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
    };
  }

  handleClick(key) {
    const { options } = this.state;
    this.setState({
      options: options.map((option) => ({
        ...option,
        selected: option.key === key,
      })),
    });
    this.props.onChange && this.props.onChange(key);
  }

  render() {
    const options = this.state.options;
    return (
      <div className="segment-control">
        {options.map((option) => (
          <button
            className={`btn ${
              option.selected ? "segment-control__selected" : ""
            }`}
            type="button"
            key={option.key}
            onClick={() => this.handleClick(option.key)}
          >
            {option.name}
          </button>
        ))}
      </div>
    );
  }
}

export default SegmentControl;
