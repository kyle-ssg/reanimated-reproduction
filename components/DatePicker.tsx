import _DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";

export const DatePicker: React.FC<ReactDatePickerProps> = ({ minDate, maxDate, selected, highlightDates, excludeDates, onChange, ...rest }) => {
  
  const getDate = (d: string | Date): Date => {
    if (typeof d === "string") {
      return new Date(d);
    }
    return d;
  };

  const getDates = (dates: Array<string | Date>): Date[] => dates.map(getDate);

  return (
      <_DatePicker
        minDate={getDate(minDate)}
        maxDate={getDate(maxDate)}
        // highlightDates={getDates(highlightDates)}
        excludeDates={getDates(excludeDates)}
        selected={getDate(selected)}
        onChange={onChange}
        {...rest}
      />
  )
}

DatePicker.displayName = "DatePicker"
export default DatePicker;
