import React from 'react'

interface Props {
  children?: React.ReactNode
  style?: any
  testID?: string
}

const ErrorMessage: React.FC<Props> = ({ style, testID, children }) => {
  if (children === null || typeof children === 'undefined' || !children) {
    return null
  }
  return (
    <Row testID={testID} style={[style]}>
      <FA5Pro
        name='exclamation-circle'
        style={Styles.pr5}
        size={20}
        color={palette.red}
      />
      <Text style={styles.ErrorMessageText}>
        {typeof children === 'string' ? children : 'Error processing request'}
      </Text>
    </Row>
  )
}

export const SuccessMessage: React.FC<Props> = ({
  testID,
  style,
  children,
}) => {
  if (children === null || typeof children === 'undefined' || !children) {
    return null
  }
  return (
    <Row testID={testID} style={[style]}>
      <FA5Pro
        name='exclamation-circle'
        style={Styles.pr5}
        size={20}
        color={palette.aquamarine}
      />
      <Text style={styles.SuccessMessageText}>
        {typeof children === 'string' ? children : Strings.genericError}
      </Text>
    </Row>
  )
}

export default ErrorMessage

const styles = ReactNative.StyleSheet.create({
  ErrorMessageText: {
    color: palette.danger,
  },
  SuccessMessageText: {
    color: palette.primary,
  },
})
