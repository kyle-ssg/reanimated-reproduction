import _DatePicker, { ReactDatePickerProps } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useCallback } from "react";

export type DatePickerProps = Omit<ReactDatePickerProps, "value" | "onChange" | "minDate"> & {
  value: string;
  onChange?: (newDate:Date)=>void;
  minDate?: string;
};

const getDate = (d: string | Date): Date => {
  if (typeof d === "string") {
    return new Date(d);
  }
  return d;
};

const getDates = (dates: Array<string | Date>): Date[] => (dates||[]).map(getDate);

export const DatePicker: React.FC<DatePickerProps> = ({
  minDate,
  maxDate,
  selected,
  highlightDates,
  excludeDates,
  onChange,
  ...rest
}) => {

  if (Constants.E2E) {
    return (
      <Input {...rest}
        onChange={(e)=>{
               // @ts-ignore
          const date = new Date(Utils.safeParseEventValue(e));
          if (!isNaN(date.valueOf()))
               onChange(date)
        }}
      />
    )
  }
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
  );
};

DatePicker.displayName = "DatePicker";
export default DatePicker;
