/**
 * Created by kylejohnson on 28/07/2016.
 */
//import Push from '../../apis/push';

const TheComponent = class extends React.Component {
  displayName:'TheComponent'

  constructor (props, context) {
    super(props, context);
    this.state = { /*push: new Push(this.onNotification), registered: false*/ };
  }

  onNotification () {
    alert("Notified");
  }

  sendLocalPushNotification = () => {
    this.state.push.sendLocal("Title", "Text");
  }

  render () {
    return (
      <Flex style={Styles.centeredContainer}>
        <Button style={Styles.rounded} onPress={this.sendLocalPushNotification}>
          <Text style={Styles.buttonText}>Send Local Push Notification</Text>
        </Button>
      </Flex>
    );
  }
};

TheComponent.propTypes = {};

module.exports = TheComponent;
