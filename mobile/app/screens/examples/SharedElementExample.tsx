import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from 'react-native-shared-element';
import React, { Component } from 'react';
import { CustomModal } from 'components//CustomModal';
import { ease } from '../../project/animations';
import Delay from 'components//utility-components/Delay';
import { ButtonSecondary } from 'components//base/forms/Button';

type ComponentType = {};

class TheComponent extends Component<ComponentType> {
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
    modalVisible: false,
  };

  onPressNavigate = () => {
    this.setState(
      { modalVisible: true, isInProgress: true, isScene2Visible: true },
      () => {
        Animated.timing(this.state.progress, {
          toValue: 1,
          duration: 350,
          useNativeDriver: true,
          easing: ease,
        }).start(() => {
          this.setState({
            isInProgress: false,
            isScene1Visible: false,
            isBack: true,
          });
        });
      },
    );
  };

  onPressBack = () => {
    // this.state.progress.setValue(0)
    this.setState(
      { isScene1Visible: true, isInProgress: true, modalVisible: false },
      () => {
        Animated.timing(this.state.progress, {
          toValue: 1,
          duration: 350,
          useNativeDriver: true,
          easing: ease,
        }).start(() => {
          this.setState({
            isScene1Visible: true,
            isScene2Visible: false,
            isBack: false,
          });
        });
      },
    );
  };

  onSetScene1Ref = (ref) => {
    this.setState({ scene1Ancestor: nodeFromRef(ref) });
  };
  onSetScene2Ref = (ref) => {
    this.setState({ scene2Ancestor: nodeFromRef(ref) });
  };
  onSetScene1Node = (node) => this.setState({ scene1Node: node });
  onSetScene2Node = (node) => this.setState({ scene2Node: node });

  renderScene2 = () => (
      <View>
          <ButtonSecondary style={{ width: 150 }} onPress={this.onPressBack}>
              Press me
          </ButtonSecondary>
      </View>
  );

  renderScene1 = () => (
      <View>
          <Button style={{ width: 150 }} onPress={this.onPressNavigate}>
              Press me
          </Button>
      </View>
  );

  render() {
    const { state } = this;
    const scene1 = {
      node: state.scene1Node,
      ancestor: state.scene1Ancestor,
    };
    const scene2 = {
      node: state.scene2Node,
      ancestor: state.scene2Ancestor,
    };
    return (
        <>
            {/* Scene 1 */}
            <View style={{ alignItems: 'center' }}>
                <View style={{ height: 64 }}>
                    {this.state.isScene1Visible && (
                    <View collapsable={false} ref={this.onSetScene1Ref}>
                        <SharedElement onNode={this.onSetScene1Node}>
                            {this.renderScene1()}
                        </SharedElement>
                    </View>
            )}
                </View>
            </View>

            <CustomModal
              style={{ justifyContent: 'center', alignItems: 'center' }}
              fadeContent={false}
              dark
              visible={this.state.modalVisible}
            >
                {this.state.isScene2Visible && (
                <View collapsable={false} ref={this.onSetScene2Ref} style={[{}]}>
                    <SharedElement onNode={this.onSetScene2Node}>
                        {Platform.select({
                  ios: this.renderScene2(),
                  // Not sure why, but android needs time to measure to prevent a glitch
                  android: <Delay delay={10}>{this.renderScene2()}</Delay>,
                })}
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
            </CustomModal>
        </>
    );
  }
}

export default TheComponent;
