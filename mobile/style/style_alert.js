module.exports = {
  //
  // Alerts
  // --------------------------------------------------

  alert: {
    fontSize: styleVariables.fontSizeAlert
  },

  alertIcon: {
    fontSize: styleVariables.fontSizeIcon
  },

  notificationBubble: {
    width: styleVariables.notificationWidth,
    height: styleVariables.notificationHeight,
    borderRadius: styleVariables.notificationBorderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colour.notification
  },

  notificationBubbleText: {
    fontSize: styleVariables.notificationFontSize,
    fontWeight: styleVariables.headingsFontWeight,
    color: colour.notificationText
  }

};
