import React, {
  FunctionComponent,
  useState,
  useEffect,
  useCallback,
} from 'react' // we need this to make JSX compile
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import SelectBox from 'components/../../../common/components/forms/SelectBox'
import Icon from 'react-native-vector-icons/Ionicons'

import moment from 'moment'
type Props = {
  value: Date
  format?: string
  title?: string
  onChange: (date: Date) => void
}

const DateSelect: React.FC<Props> = ({
  value,
  format = 'Do MMMM YYYY',
  onChange,
  title = 'Date',
}) => {
  const [formattedDate, setFormattedDate] = useState<string>(
    moment(value).format(format),
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
    setFormattedDate(moment(value).format(format))
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
        display='compact'
        onConfirm={onConfirm}
        onCancel={toggleVisible}
      />
    </>
  )
}

export default DateSelect
