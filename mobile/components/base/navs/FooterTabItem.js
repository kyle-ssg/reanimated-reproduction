/**
 * Created by kylejohnson on 18/04/2016.
 */
module.exports = Component({
  propTypes: {
    text: OptionalString,
    icon: RequiredString,
  },
  getDefaultProps: function () {
    return {
      IconType: ION
    }
  },
  render: function () {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <this.props.IconType name={this.props.icon}
                               style={[Styles.footerIcon,
                                 this.props.isActive && Styles.footerIconActive]}/>
          {this.props.text && (
            <Text style={[Styles.footerIconText, this.props.isActive && Styles.footerIconActive]}>
              {this.props.text}
            </Text>
          )}
        </View>
        <Fade value={this.props.alert} style={Styles.footerItemAlert}>
          <Text style={Styles.footerItemAlertText}>
            {this.props.alert}
          </Text>
        </Fade>
      </View>
    )
  }
})
