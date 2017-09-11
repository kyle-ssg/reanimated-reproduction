/**
 * Created by kylejohnson on 28/07/2016.
 */
//import Push from '../../apis/push';

const TheComponent = class extends React.Component {
    displayName: 'TheComponent'

    constructor(props, context) {
        super(props, context);
        this.state = { /*push: new Push(this.onNotification), registered: false*/ };
        FCM.requestPermissions(); // for iOS
        FCM.getFCMToken().then(token => {
            console.log(token)
            // store fcm token in your server
        });
        this.notificationListener = FCM.on(FCMEvent.Notification, async(notif) => {
            alert("Received notification")
            if(notif.local_notification){
                //this is a local notification
            }
            if(notif.opened_from_tray){
                //app is open/resumed because user clicked banner
            }
        })
    }

    sendLocalPushNotification = () => {
        FCM.presentLocalNotification({
            id: "UNIQ_ID_STRING",                               // (optional for instant notification)
            title: "My Notification Title",                     // as FCM payload
            body: "My Notification Message",                    // as FCM payload (required)
            sound: "default",                                   // as FCM payload
            priority: "high",                                   // as FCM payload
            click_action: "ACTION",                             // as FCM payload
            badge: 10,                                          // as FCM payload IOS only, set 0 to clear badges
            number: 10,                                         // Android only
            ticker: "My Notification Ticker",                   // Android only
            auto_cancel: true,                                  // Android only (default true)
            large_icon: "ic_launcher",                           // Android only
            icon: "ic_launcher",                                // as FCM payload, you can relace this with custom icon you put in mipmap
            big_text: "Show when notification is expanded",     // Android only
            sub_text: "This is a subText",                      // Android only
            color: "red",                                       // Android only
            vibrate: 300,                                       // Android only default: 300, no vibration if you pass null
            tag: 'some_tag',                                    // Android only
            group: "group",                                     // Android only
            my_custom_data:'my_custom_field_value',             // extra data you want to throw
            lights: true,                                       // Android only, LED blinking (default false)
            show_in_foreground:true
        })
    }

    render() {
        return (
            <Flex>
                <Button onPress={this.sendLocalPushNotification}>
                    <Text style={Styles.buttonText}>Send Local Push Notif</Text>
                </Button>
            </Flex>
        );
    }
};

TheComponent.propTypes = {};

module.exports = TheComponent;
