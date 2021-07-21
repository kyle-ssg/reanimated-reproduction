import React from 'react'
import { Platform, TouchableNativeFeedback } from 'react-native'

interface Props {
  accessible?: boolean
  accessibilityLabel?: string
  active?: boolean
  icon?: React.ReactNode
  rightElement?:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  testID?: string
  children: [React.ReactNode] | React.ReactNode
  delay?: number
  index?: number
  onPress?: () => void
  style?: any
  disabled?: boolean
  isEditable?: boolean
}

export const ListItem: React.FC<Props> = ({
  accessible,
  active,
  testID,
  accessibilityLabel,
  style,
  icon,
  rightElement,
  disabled,
  children,
  onPress = null,
  delay = 0,
}) => {
  const content = (
    <View style={[disabled && Styles.listItemDisabled]}>
      <Container style={[Styles.listItemBorder, Styles.pb10]}>
        <Row>
          {icon ? <View style={[Styles.pr10]}>{icon}</View> : null}
          <View>{children}</View>
          <Flex style={[Styles.alignItemsEnd]}>{rightElement}</Flex>
        </Row>
      </Container>
    </View>
  )

  return onPress ? (
    <View style={[Styles.listItem, style, active && Styles.listItemActive]}>
      {Platform.OS === 'android' ? (
        <TouchableNativeFeedback
          testID={testID}
          accessible={accessible}
          accessibilityLabel={accessibilityLabel}
          onPress={disabled ? null : onPress}
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        >
          {content}
        </TouchableNativeFeedback>
      ) : (
        <TouchableOpacity
          testID={testID}
          accessible={accessible}
          accessibilityLabel={accessibilityLabel}
          activeOpacity={0.8}
          onPress={disabled ? null : onPress}
        >
          {content}
        </TouchableOpacity>
      )}
    </View>
  ) : (
    <View style={[Styles.listItem, style, active && Styles.listItemActive]}>
      {content}
    </View>
  )
}

export default ListItem
