import React from 'react';
import { Component } from 'react';
import withScreen, { Screen } from './withScreen';
import { RouteUrls } from '../route-urls';
import { TouchableOpacity } from 'react-native';
import CustomNavbar from '../components/CustomNavbar';
import { CustomModal, Modal } from '../components/CustomModal';

type ComponentType = Screen & {}

class HomeScreen extends Component<ComponentType, {modalVisible:boolean}> {
  state = {
      modalVisible: false
  }

  constructor(props) {
      super(props);
  }

  goCustomNavbar = ()=> {
      this.props.push(RouteUrls.generic, {
          text:"Some text",
          children: (
              <View style={this.props.style}>
                  <Image
                    style={{ height:300 }}
                    source={{
                        uri:"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    }}/>
                  <CustomNavbar style={{ position:'absolute', top:0, left:0, right:0 }} title="Custom navbar"/>
              </View>
          ),
          screenOptions: {
              headerShown: false
          }
      })
  }

  goAboutModal = ()=> {
      this.props.push(RouteUrls.generic, {
          text:"Some text",
          screenOptions: {
              stackPresentation: "modal",
              headerShown: false
          }
      })
  }
  goTransparentModal = ()=> {
      this.props.push(RouteUrls.stack, {
          text:"Some text",
          style: {
              position:"absolute",
              top:200,
              left:20,
              right:20,
              borderRadius:50,
              backgroundColor: "#f1f1f1",
              padding:50,
              bottom:100,
          },
          screenOptions: {
              stackPresentation: "containedTransparentModal",
              contentStyle: {
                  backgroundColor: "transparent"
              },
              headerShown: false
          }
      })
  }

  goTabs = ()=> {
      this.props.replace(RouteUrls.tabs,{
          screenOptions:{
              headerShown: false
          }
      })
  }

  goStackModal = ()=> {
      this.props.push(RouteUrls.stack, {
          style:StyleSheet.absoluteFill,
          screenOptions: {
              stackPresentation: "modal",
          }
      })
  }

  goGeneric = ()=> {
      this.props.push(RouteUrls.generic, {
      })
  }

  toggleModal = ()=> this.setState({ modalVisible:!this.state.modalVisible })

  render() {
      return (
          <>
              <Flex style={Styles.body}>
                  <TouchableOpacity onPress={this.goCustomNavbar}>
                      <Text>
                          Go custom navbar
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.goGeneric}>
                      <Text>
                          Go generic screen
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.goAboutModal}>
                      <Text>
                          Go Modal
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.goTabs}>
                      <Text>
                          Go Tabs
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.goStackModal}>
                      <Text>
                          Go Stack Modal
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.goTransparentModal}>
                      <Text>
                          Transparent modal
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.toggleModal}>
                      <Text>
                          Custom modal
                      </Text>
                  </TouchableOpacity>
                  <CustomModal style={Styles.centeredContainer} onDismissPress={this.toggleModal} visible={this.state.modalVisible}>
                      <View style={{ width:100,height:100,justifyContent:'center',alignItems:'center', borderRadius: 50, backgroundColor:'#f1f1f1' }}>
                          <Text>
                              Hi
                          </Text>
                      </View>
                  </CustomModal>
              </Flex>
          </>
      )
  }
}

export default withScreen(HomeScreen)

console.disableYellowBox = true
