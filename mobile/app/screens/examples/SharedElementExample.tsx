import { SharedElement, SharedElementTransition, nodeFromRef, } from 'react-native-shared-element';
import { Modal, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import { CustomModal } from '../../components/CustomModal';
import { easing, easeInOut } from '../../project/animations'
export default class App extends Component {
  state = {
      progress: new Animated.Value(0),
      isScene1Visible: true,
      isScene2Visible: false,
      isBack: false,
      isInProgress: false,
      scene1Ancestor: undefined,
      scene1Node: undefined,
      scene2Ancestor: undefined,
      scene2Node: undefined,
      modalVisible: false
  };

  onPressNavigate = () => {
      this.setState({ isScene2Visible: true, isInProgress: true, modalVisible:true })
      Animated.timing(this.state.progress, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
          easing:easeInOut,
      }).start(() =>{
          this.setState({ isInProgress: false, isScene1Visible: false, isBack:true })
          this.state.progress.setValue(0)
      });
  };

  onPressBack = () => {
      // this.state.progress.setValue(0)
      this.setState({ isScene1Visible: true, isInProgress: true, modalVisible: false })
      Animated.timing(this.state.progress, {
          toValue: 1,
          duration: 160,
          useNativeDriver: true,
          easing:easing,
      }).start(() =>{
          this.setState({
              isScene1Visible: true,
              isScene2Visible: false,
              isBack: false,
          })
      });
  };

  onSetScene1Ref = ref => {this.setState({ scene1Ancestor: nodeFromRef(ref) });};
  onSetScene2Ref = ref => {this.setState({ scene2Ancestor: nodeFromRef(ref) });};
  onSetScene1Node = node => this.setState({ scene1Node: node })
  onSetScene2Node = node => this.setState({ scene2Node: node })

  render() {
      const { state } = this;
      const scene1 = {
          node: state.scene1Node,
          ancestor: state.scene1Ancestor,
      }
      const scene2 = {
          node: state.scene2Node,
          ancestor: state.scene2Ancestor,
      }
      return (
          <>
              {/* Scene 1 */}
              {this.state.isScene1Visible && (
              <View ref={this.onSetScene1Ref}>
                  <SharedElement onNode={this.onSetScene1Node}>
                      <View style={{ width:200 }}>
                          <TouchableOpacity onPress={this.onPressNavigate} style={{ backgroundColor:'#f1f1f1', padding: 20, alignItems:'center' }}>
                              <Text>Press me</Text>
                          </TouchableOpacity>
                      </View>
                  </SharedElement>
              </View>
              )}
              <CustomModal dark visible={this.state.modalVisible}>
                  <>
                      {/* Scene 2 */}
                      {this.state.isScene2Visible && (
                      <View ref={this.onSetScene2Ref} style={[StyleSheet.absoluteFillObject,{ marginTop:64 }]}>
                          <SharedElement onNode={this.onSetScene2Node}>
                            <View style={{ }}>
                                  <TouchableOpacity onPress={this.onPressBack} style={{ backgroundColor:'#f1f1f1', padding: 20, alignItems:'center' }}>
                                      <Text>Press me</Text>
                                  </TouchableOpacity>
                              </View>
                          </SharedElement>
                      </View>
                      )}

                      {state.isInProgress && (
                          <SharedElementTransition
                            start={this.state.isBack ? scene2 : scene1}
                            end={this.state.isBack ? scene1 : scene2}
                            position={state.progress}
                            animation="fade"
                            resize="auto"
                            align="auto"
                          />
                      )}
                  </>
              </CustomModal>
          </>
      );
  }
}
