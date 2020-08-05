import _DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { PureComponent } from "react";
import propTypes from "prop-types";

const _propTypes = {
  /** What class to add to the component */
  className: propTypes.string,
  /** The element's children */
  children: propTypes.node,
  /** If you wish to have a custom input */
  customInput: propTypes.node,
  /** Format shown e.g. dd/MM/YYYY HH:mma */
  dateFormat: propTypes.string,
  /** Disable selection */
  disabled: propTypes.bool,
  /** exclude dates, pass an array of dates */
  excludeDates: propTypes.array,
  /** highlight dates, pass an array of dates */
  highlightDates: propTypes.array,
  /** min date allowed */
  minDate: propTypes.string,
  /** max date allowed */
  maxDate: propTypes.string,
  /** max date allowed */
  selected: propTypes.string,
  /** allow for time intervals */
  timeIntervals: propTypes.number,
  /** show a time select */
  showTimeSelect: propTypes.bool,
  /** show only a time select */
  showTimeSelectOnly: propTypes.bool,
  /** custom time format */
  timeFormat: propTypes.string,
};

/**
 * The Component
 */
export class DatePicker extends PureComponent {
  static displayName = "DatePicker";

  static propTypes = _propTypes;

  getDate = (d) => {
    if (typeof d === "string") {
      return new Date(d);
    }
    return d;
  };

  getDates = (dates) => {
    if (!dates) {
      return dates;
    }
    return dates.map(this.getDate);
  };

  render() {
    const {
      props: {
        minDate,
        maxDate,
        selected,
        highlightDates,
        excludeDates,
        ...rest
      },
    } = this;
    return (
        <_DatePicker
          minDate={this.getDate(minDate)}
          maxDate={this.getDate(maxDate)}
          highlightDates={this.getDates(highlightDates)}
          excludeDates={this.getDates(excludeDates)}
          selected={this.getDate(selected)}
          {...rest}
      />
    );
  }
}

export default DatePicker;
