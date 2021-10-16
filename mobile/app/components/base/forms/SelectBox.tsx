import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import FormGroup from '../grid/FormGroup'

interface Props {
  disabled?: boolean
  hideIcon?: boolean
  onPress?: () => void
  textStyle?: ReactNative.TextStyle
  containerStyle?: ReactNative.ViewStyle
  iconStyle?: {}
  children?: React.ReactNode
  options?: string[]
  title?: string
  onChange?: (index: string, item: number) => void
  onBlur?: () => void
  titleStyle?: ReactNative.TextStyle
  destructiveButton?: boolean
  style?: ReactNative.ViewStyle
  icon?: React.ReactNode
  dropIcon?: React.ReactNode
  hideSeparator?: boolean
}

const SelectBox: React.FC<Props> = ({
  options,
  title,
  onChange,
  onBlur,
  destructiveButton,
  disabled,
  onPress,
  textStyle,
  containerStyle,
  icon,
  hideIcon,
  children,
  style,
  titleStyle,
  dropIcon,
  hideSeparator,
}) => {
  const onPressHandler = () => {
    if (!options || !options.length) return
    API.showOptions(title, options, true, false, destructiveButton, true).then(
      (index: number) => {
        if (onBlur) onBlur()
        if (onChange && index != null)
          onChange(
            index < options.length ? options[index] : null,
            index < options.length ? index : null,
          )
      },
    )
  }

  return (
    <View style={[style, { opacity: disabled ? 0.5 : 1 }]}>
      {!!title && (
        <FormGroup>
          <Text style={[Styles.inputLabel, titleStyle || {}]}>{title}</Text>
        </FormGroup>
      )}
      <TouchableOpacity
        activeOpacity={disabled ? 1 : 0.8}
        onPress={!disabled && (onPress || onPressHandler)}
        style={[Styles.selectBoxContainer, containerStyle || {}]}
      >
        <Row>
          {icon ? (
            <View style={{ marginRight: 10, top: 2 }}>{icon}</View>
          ) : null}

          <View style={Styles.pr15}>
            <Text
              numberOfLines={1}
              style={[Styles.selectBoxText, { top: 2 }, textStyle || {}]}
            >
              {children}{' '}
            </Text>
          </View>
          {!hideIcon && (
            <View
              style={[
                {
                  position: 'absolute',
                  right: 0,
                  top: 1,
                  height: 24,
                  paddingLeft: 15,
                  justifyContent: 'center',
                },
                Styles.pr5,
                hideSeparator ? null : Styles.selectSeparator,
              ]}
            >
              {dropIcon ? (
                dropIcon
              ) : (
                <>
                  <Icon name='chevron-down' />
                </>
              )}
            </View>
          )}
        </Row>
      </TouchableOpacity>
    </View>
  )
}

export default SelectBox
