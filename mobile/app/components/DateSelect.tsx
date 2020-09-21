import React, { FunctionComponent, useState, useEffect, useCallback } from 'react'; // we need this to make JSX compile
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SelectBox from 'components/base/forms/SelectBox';
import Icon from 'react-native-vector-icons/Ionicons';

import moment from 'moment'
type ComponentType = {
  value: Date
  format?:string
  title?:string
  onChange:(date:Date)=>void
}

const DateSelect: FunctionComponent<ComponentType> = ({
  value,
  format = "Do MMMM YYYY",
  onChange,
  title="Date"
}) => {
  const [formattedDate, setFormattedDate] = useState<string>(moment(value).format(format));
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisible = useCallback(()=>{
    setIsVisible(!isVisible)
  },[isVisible])
  const onConfirm = useCallback((value)=>{
    toggleVisible()
    onChange(value)
  },[onChange, value])
  useEffect(()=>{
    setFormattedDate(moment(value).format(format));
  }, [value,format])
  return (
      <>
          <SelectBox onPress={toggleVisible} title={title}
            icon={<Icon name="calendar" size={20} color={palette.navy}
              light
                  />}
          >
              {formattedDate}
          </SelectBox>
          <DateTimePickerModal
            isVisible={isVisible}
            mode="date"
            display="compact"
            onConfirm={onConfirm}
            onCancel={toggleVisible}
          />
      </>
  );
};

export default DateSelect;