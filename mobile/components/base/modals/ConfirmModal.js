/**
 * Created by kylejohnson on 22/10/15.
 * todo: Not updated yet
 */
module.exports = Component({
  duration: 100,
  springDuration: 25,
  onNo: function () {
    if (this.props.onNo) {
      this.props.onNo();
    }
    this.props.closeModal();
  },
  onYes: function () {
    if (this.props.onYes) {
      this.props.onYes();
    }
    this.props.closeModal();
  },
  render: function () {
    return (
      <View style={[styles.modal]}>
        <View
          style={{ alignItems: 'center', flex: 1, padding: 10 }}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.description}>{this.props.description}</Text>
          </View>
          <View
            style={[Styles.row, {
              flex: 1,
              paddingBottom: 10,
              marginRight: 5,
              justifyContent: 'space-between'
            }]}>
            <Button
              style={{
                width: Dimensions.get("window").width / 2 - 20,
                backgroundColor: colour.selectButtonCancel
              }}
              onPress={this.onNo}>{this.props.noText || 'No'}</Button>

            <Button style={{ marginLeft: 5, width: Dimensions.get("window").width / 2 - 20 }}
                    onPress={this.onYes}>{this.props.yesText || 'Yes'}</Button>
          </View>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  modal: {
    backgroundColor: 'transparent'
  },
  modalContent: {},
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  titleContainer: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  description: {
    color: colour.confirmDescription,
  },
});
