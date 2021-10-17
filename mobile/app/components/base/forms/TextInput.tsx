/**
 * Created by kylejohnson on 14/11/2015.
 */

import ReactNative from 'react-native'

import React, { FunctionComponent, useRef, useState } from 'react' // we need this to make JSX compile

export type TextInputProps = ReactNative.TextInputProps & {
  title?: string
  style?: ReactNative.StyleProp<ReactNative.ViewStyle>
  invalid?: boolean
  disabled?: boolean
  textStyle?: ReactNative.TextStyle
  isLight?: boolean
  icon?: string
  iconColour?: string
}

const TextInput: FunctionComponent<TextInputProps> = (props) => {
  const inputRef = useRef<ReactNative.TextInput>()
  const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(
    props.secureTextEntry,
  )

  const clear = () => {
    inputRef.current.clear()
  }

  const blur = () => {
    inputRef.current.blur()
  }

  const focus = () => {
    inputRef.current.focus()
  }

  const onFocus = (e) => {
    if (props.onFocus) {
      props.onFocus(e)
    }
  }

  const onBlur = (e) => {
    if (props.onBlur) {
      props.onBlur(e)
    }
  }

  const onChangeText = (text) => {
    if (!props.onChangeText) {
      return
    }
    props.onChangeText(text)
  }

  return (
    <>
      {props.title && (
        <FormGroup>
          {props.isLight ? (
            <>
              <Text style={[Styles.textInputTitleLight, props.textStyle]}>
                {props.title}
              </Text>
            </>
          ) : (
            <Text style={[Styles.textInputTitleDark, props.textStyle]}>
              {props.title}
            </Text>
          )}
        </FormGroup>
      )}
      <View>
        <ReactNative.TextInput
          {...props}
          secureTextEntry={isSecureTextEntry}
          onFocus={onFocus}
          editable={!props.disabled && props.editable !== false}
          onBlur={onBlur}
          onChangeText={onChangeText}
          style={[
            Styles.textInput,
            props.style,
            props.invalid && Styles.textInputError,
          ]}
          value={props.value}
          testID={props.testID}
          ref={inputRef}
          blurOnSubmit={Platform.OS === 'ios' && !props.multiline}
          placeholderTextColor={
            props.invalid ? palette.danger : 'rgba(11,16,46,0.5)'
          }
          selectionColor={palette.primary}
          icon={props.icon}
          iconColour={props.icon}
          multiline={props.multiline}
          textAlignVertical={props.textAlignVertical}
        />
        {props.icon ? (
          <>
            <FA5Pro
              solid
              style={Styles.textInputIcon}
              name={props.icon}
              size={20}
              color={props.iconColour || palette.primary}
            />
          </>
        ) : null}

        {props.secureTextEntry ? (
          <TouchableOpacity
            onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}
            style={[{ position: 'absolute', width: 50, right: 0, height: 50 }]}
          >
            <FA5Pro
              style={Styles.textInputIcon}
              name={isSecureTextEntry ? 'eye' : 'eye-slash'}
              size={20}
              color={palette.primary}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  )
}

export default TextInput
