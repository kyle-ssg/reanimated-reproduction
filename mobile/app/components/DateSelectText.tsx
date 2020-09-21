import React, { FunctionComponent, useState, useEffect, useCallback } from 'react'; // we need this to make JSX compile
import DateTimePickerModal from 'react-native-modal-datetime-picker';
type ComponentType = {
  value: Date
  format?:string
  text: string
  textStyle?:ReactNative.TextStyle[],
  style?:ReactNative.ViewStyle
  onChange:(date:Date)=>void
}

const DateSelectText: FunctionComponent<ComponentType> = ({
  value,
  onChange,
  text,
  style,
  textStyle
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisible = useCallback(()=>{
    setIsVisible(!isVisible)
  },[isVisible])
  const onConfirm = useCallback((value)=>{
    setIsVisible(false)
    onChange(value)
  },[onChange])
  return (
      <>
          <TouchableOpacity onPress={toggleVisible} style={style}>
              <Text style={textStyle}>
                  {
                    text
                  }
              </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isVisible}
            mode="date"
            onConfirm={onConfirm}
            onCancel={toggleVisible}
          />
      </>
  );
};

export default DateSelectText;
