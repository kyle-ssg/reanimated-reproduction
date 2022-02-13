import SelectBox from 'components/base/forms/SelectBox'
import { FC, useCallback, useEffect, useState } from 'react'
import DateTimePickerModal, {
  ReactNativeModalDateTimePickerProps,
} from 'react-native-modal-datetime-picker'
import Icon from 'react-native-vector-icons/Ionicons'
import dayjs from 'dayjs'

type Props = {
  value: Date
  format?: string
  title?: string
  onChange: (date: Date) => void
  datePickerProps?: ReactNativeModalDateTimePickerProps
}

const DateSelect: FC<Props> = ({
  value,
  format = 'Do MMMM YYYY',
  onChange,
  title = 'Date',
  datePickerProps = {},
}) => {
  const [formattedDate, setFormattedDate] = useState<string>(
    dayjs(value).format(format),
  )
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const toggleVisible = useCallback(() => {
    setIsVisible(!isVisible)
  }, [isVisible])
  const onConfirm = useCallback(
    (value) => {
      toggleVisible()
      onChange(value)
    },
    [onChange, toggleVisible],
  )
  useEffect(() => {
    setFormattedDate(dayjs(value).format(format))
  }, [value, format])
  return (
    <>
      <SelectBox
        onPress={toggleVisible}
        title={title}
        icon={<Icon name='calendar' size={20} light />}
      >
        {formattedDate}
      </SelectBox>
      <DateTimePickerModal
        isVisible={isVisible}
        mode='date'
        display='spinner'
        onConfirm={onConfirm}
        onCancel={toggleVisible}
        {...datePickerProps}
      />
    </>
  )
}

export default DateSelect
