/**
 * Created by kylejohnson on 28/01/2017.
 */

import React, { Component } from 'react';
import propTypes from 'prop-types';
import AutoHeightImage from 'react-native-auto-height-image';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Svg, { } from 'react-native-svg';
// import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
// import { FBLogin, FBLoginManager } from 'react-native-facebook-login';
import { Path } from 'react-native-svg'
import codePush from 'react-native-code-push';

import { ButtonSecondary, ButtonTertiary } from '../../components/base/forms/Button';

const codePushOptions = {
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
    installMode: codePush.InstallMode.ON_NEXT_RESUME,
    updateDialog: true,
};

const ExampleScreen = codePush(codePushOptions)(class extends Component {
    static options() {
        return {
            topBar: {
                leftButtons: [
                    {
                        id: 'open-drawer',
                        icon: global.iconsMap['ios-menu'],
                        color: 'white',
                    },
                ],
                rightButtons: [],
            },
        };
    }

  static displayName = 'ExampleScreen';

  static propTypes = {
      componentId: propTypes.string,
      navigator: propTypes.object,
  };

  constructor(props, context) {
      super(props, context);
      this.state = {};
  }

  componentDidMount() {
      if (this.props.componentId) {
          Navigation.events().bindComponent(this);
      }
  }

  onNavigatorEvent = (event) => {
      if (event.id === routes.navEvents.SHOW) {
          this.props.navigator.setDrawerEnabled({ side: 'right', enabled: true });
          API.trackPage('Home Screen');
      } else if (event.id === routes.navEvents.HIDE) {
          this.props.navigator.setDrawerEnabled({ side: 'right', enabled: false });
      }
  };

  getInitialLink = () => {
      API.getInitialLink(this.onLink);
  };

  showUpload = () => {
      API.showUpload('Upload a file', false, 100, 100, 0.8, () => {
          this.setState({ isUploading: true });
      }).then((res) => {
          // eslint-disable-next-line
          alert(JSON.stringify(res));
      });
  };

  openSelect = () => {
      Navigation.showModal(
          routes.selectModal('Select a thing', {
              items: ['item 1', 'item 2'],
              filterItem: (contact, search) => contact.indexOf(search) !== -1,
              onChange: (options) => this.setState({ options }),
              renderRow: (item, isSelected, toggleItem) => (
                  <ListItem onPress={toggleItem}>
                      <Text>{item}</Text>
                      <Checkbox value={isSelected} />
                  </ListItem>
              ),
          }),
      );
  };

  selectContact = () => {
      Navigation.showModal(
          routes.contactSelectModal('Select Contact', (contact) => {
              this.setState({ contacts: [contact] });
          }),
      );
  };

  selectMultipleContacts = () => {
      Navigation.showModal(
          routes.contactSelectModal(
              'Select Contacts',
              (contact) => {
                  this.setState({ contacts: [contact] });
              },
              true,
          ),
      );
  };

  showExampleLightbox = () => {
      Navigation.showOverlay(routes.exampleLightbox());
  };

  openWebModal = () => {
      Navigation.showModal(routes.webModal('https://www.google.com', 'Google'));
  };

  generateLink = () => {
      API.generateLink(
          'SSG Boilerplate',
          {
              route: {
                  screen: 'aboutScreen',
                  data: {
                      customData: 'bla',
                  },
              },
          },
          'www.solidstategroup.com',
      )
          .then((branchURL) => {
              this.setState({ branchURL });
          })
          .catch((e) => {
              API.log(e);
          });
  };

  registerPush = () => {
      if (this.state.token) {
          this.setState({ token: null });
          API.push.unsubscribe('/topics/all');
          API.push.stop();
      } else {
          this.initPush(false);
      }
  };

  initPush = (silent) => {
      API.push.init(this.onNotification, silent).then((token) => {
          API.push.subscribe('/topics/all');
          this.setState({ token });
      });
  };

  onLink = (notification) => {
      if (notification.route) {
          const route = notification.route;
          if (routes[route.screen]) {
              this.props.navigator.push(routes[route.screen](route.data));
          }
      }
  };

  onNotification = (notification) => {
      if (notification.fromClick) {
          if (notification.route) {
              const route = JSON.parse(notification.route);
              if (routes[route.screen]) {
                  this.props.navigator.push(routes[route.screen](route.data));
              }
          }
      }
  };

  triggerError = () => {
      API.log({}.hell.no);
  };

  googleSignIn = async () => {
      try {
          // eslint-disable-next-line no-undef
          await GoogleSignin.hasPlayServices();
          // eslint-disable-next-line no-undef
          const googleUserInfo = await GoogleSignin.signIn();
          this.setState({ googleUserInfo, error: null });
      } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // sign in was cancelled
              Alert.alert('cancelled');
          } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation in progress already
              Alert.alert('in progress');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              Alert.alert('play services not available or outdated');
          } else {
              Alert.alert('Something went wrong', error.toString());
              this.setState({
                  error,
              });
          }
      }
  };


  codePushStatusDidChange(status) {
      switch (status) {
          case codePush.SyncStatus.CHECKING_FOR_UPDATE:
              // console.log('[CodePush] Checking for updates.');
              break;
          case codePush.SyncStatus.DOWNLOADING_PACKAGE:
              Navigation.setStackRoot(this.props.componentId, [
                  {
                      component: {
                          name: 'loading-interstitial',
                          passProps: {
                              text: 'Updating',
                          },
                          options: {
                              animations: {
                                  setStackRoot: {
                                      enabled: true,
                                  },
                              },
                          },
                      },
                  },
              ]);
              // console.log('[CodePush] Downloading package.');
              break;
          case codePush.SyncStatus.INSTALLING_UPDATE:
              // console.log('[CodePush] Installing update.');
              break;
          case codePush.SyncStatus.UP_TO_DATE:
              // console.log('[CodePush] Up-to-date.');
              break;
          case codePush.SyncStatus.UPDATE_INSTALLED:
              // console.log('[CodePush] Update installed.');
              break;
          default:
              break;
      }
  }

  render() {
      return (
          <Flex testID="example-screen">
              <ScrollView>
                  <TextInput
                    onChangeText={(val) => this.setState({ val })}
                    value={this.state.val}
                    placeholder="Example input"
                  />
                  <TextInput
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                    placeholder="Example password"
                  />
                  <H3 style={Styles.mt5}>Autoheight image</H3>
                  <AutoHeightImage
                    source={{ uri: 'https://www.placecage.com/c/400/200' }}
                    width={DeviceWidth - 20}
                  />
                  <Button onPress={() => this.setState({ showDatepicker: true })}>
                      Show DatePicker
                  </Button>
                  <Row style={Styles.mt5}>
                      <Button style={Styles.mr5}>Primary</Button>
                      <ButtonSecondary style={Styles.mr5}>Secondary</ButtonSecondary>
                      <ButtonTertiary>Tertiary</ButtonTertiary>
                  </Row>
                  <DateTimePicker
                    isVisible={this.state.showDatepicker}
                    onConfirm={(date) => this.setState({ showDatepicker: false, date })}
                    onCancel={() => this.setState({ showDatepicker: false })}
                  />
                  <ListItem
                    index={0}
                    icon={(
                        <ION
                          name="ad"
                          style={[Styles.listIcon, { color: palette.secondary }]}
                        />
                      )}
                  >
                      <Text>ListItem with Icon</Text>
                  </ListItem>
                  <ListItem>
                      <View>
                          <Text style={Styles.listItemTitle}>ListItem with Icon</Text>
                          <Text style={Styles.listItemText}>Description</Text>
                      </View>
                      <ION name="ios-arrow-forward" style={[Styles.listIconNav]} />
                  </ListItem>
                  <Svg
                    style={{ alignSelf: 'center' }}
                    height="126pt"
                    viewBox="0 -21 512 512"
                    width="126"
                  >
                      <Path
                        d="M301 394.703v30c0 24.899-20.098 45-45 45s-45-20.101-45-45v-30c0-8.402 6.598-15 15-15h60c8.402 0 15 6.598 15 15zm0 0"
                        fill="#4a696f"
                      />
                      <Path
                        d="M301 394.703v30c0 24.899-20.098 45-45 45v-90h30c8.402 0 15 6.598 15 15zm0 0"
                        fill="#384949"
                      />
                      <Path
                        d="M256 19.703c-94.2 0-165 75.899-165 165 0 53.399 25.5 103.5 70.2 135 12.3 8.7 19.8 24 19.8 41.098v3.902c0 24.899 20.098 45 45 45h60c24.902 0 45-20.101 45-45v-4.8c0-16.2 8.7-31.801 23.7-43.2 42-31.5 66.3-79.5 66.3-132 0-90.601-72.898-164.7-165-165zm0 0"
                        fill="#ffe470"
                      />
                      <Path
                        d="M421 184.703c0 52.5-24.3 100.5-66.3 132-15 11.399-23.7 27-23.7 43.2v4.8c0 24.899-20.098 45-45 45h-30v-390c92.102.3 165 74.399 165 165zm0 0"
                        fill="#fdbf00"
                      />
                      <Path
                        d="M497 199.703h-31c-8.29 0-15-6.71-15-15 0-8.293 6.71-15 15-15h31c8.29 0 15 6.707 15 15 0 8.29-6.71 15-15 15zm0 0"
                        fill="#f4d7af"
                      />
                      <Path
                        d="M46 199.703H15c-8.29 0-15-6.71-15-15 0-8.293 6.71-15 15-15h31c8.29 0 15 6.707 15 15 0 8.29-6.71 15-15 15zm0 0"
                        fill="#faecd8"
                      />
                      <Path
                        d="M393.887 46.816c-5.86-5.859-5.86-15.351 0-21.21l21.21-21.211c5.86-5.86 15.352-5.86 21.212 0s5.859 15.351 0 21.21l-21.211 21.211c-5.86 5.86-15.352 5.86-21.211 0zm0 0"
                        fill="#f4d7af"
                      />
                      <Path
                        d="M75.691 365.012c-5.859-5.86-5.859-15.352 0-21.211l21.211-21.211c5.86-5.86 15.352-5.86 21.211 0 5.86 5.855 5.86 15.351 0 21.21l-21.21 21.212c-5.86 5.86-15.352 5.86-21.212 0zm0 0M96.902 46.816l-21.21-21.21c-5.86-5.86-5.86-15.352 0-21.211 5.859-5.86 15.351-5.86 21.21 0l21.211 21.21c5.86 5.86 5.86 15.352 0 21.211s-15.351 5.86-21.21 0zm0 0"
                        fill="#faecd8"
                      />
                      <Path
                        d="M415.098 365.012L393.887 343.8c-5.86-5.86-5.86-15.356 0-21.211 5.86-5.86 15.351-5.86 21.21 0l21.212 21.21c5.859 5.86 5.859 15.352 0 21.212s-15.352 5.86-21.211 0zm0 0"
                        fill="#f4d7af"
                      />
                      <Path
                        d="M339.402 202.102l-79.203-52.5L284.5 101.3c3.3-6.598 1.2-14.399-4.8-18.899-6-4.199-14.098-3.601-19.2 1.801l-90 90c-3.3 3-4.8 7.5-4.5 12 .602 4.5 3 8.399 6.598 11.098l79.203 52.5-24.301 48.3c-3.3 6.602-1.2 14.403 4.8 18.903 6 4.2 14.098 3.598 19.2-1.8l90-90c3.3-3 4.8-7.5 4.5-12-.602-4.5-3-8.403-6.598-11.102zm0 0"
                        fill="#fdbf00"
                      />
                      <Path
                        d="M346 213.203c.3 4.5-1.2 9-4.5 12l-85.5 85.5v-222l4.5-4.5c5.102-5.402 13.2-6 19.2-1.8 6 4.5 8.1 12.3 4.8 18.898l-24.3 48.3 79.202 52.5c3.598 2.7 5.996 6.602 6.598 11.102zm0 0"
                        fill="#ff9f00"
                      />
                  </Svg>

                  <Text style={Styles.textCenter}>
                      {`You are using a ${DeviceInfo.getModel()}`}
                  </Text>
              </ScrollView>
          </Flex>
      );
  }
});

module.exports = ExampleScreen;
