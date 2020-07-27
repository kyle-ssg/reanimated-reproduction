import React from 'react';
import { Component } from 'react';
import { Animated, Pressable, TextStyle, ViewStyle } from 'react-native';
import { ease, easeIn } from '../project/animations';
import { PanGestureHandler } from 'react-native-gesture-handler'

type ComponentType = {
  value: any
  items: { value:any; label:string }[],
  onChange: (item:any)=>void,
  disabled?: boolean,
  trackStyle?: ViewStyle,
  barStyle?: ViewStyle,
  textStyle?: TextStyle,
  textActiveStyle?: TextStyle,
  textPressedStyle?: TextStyle,
  paddingX?: number,
}

const CONTAINER_PADDING_Y = 6;
const CONTAINER_PADDING_X = 6;
const CONTAINER_HEIGHT = 44;
const CONTAINER_RADIUS = 8;

const animationConfig:Animated.TimingAnimationConfig = {
    duration: 250,
    easing: ease,
    useNativeDriver: true,
    toValue:1,
};

class TheComponent extends Component<ComponentType> {

  getSelectedIndex:()=>number = ()=> {
      const index = this.props.items?.indexOf(this.props.value) || 0
      if (index !== -1) {
          return index
      }
      return 0;
  }

  state = {
      width:0,
      itemWidth:0,
  };

  clampedValue = 0;
  selectedIndex= this.getSelectedIndex();
  animatedValue = new ReactNative.Animated.Value(this.getSelectedIndex())

  animateTo = (index)=>
      Animated.timing(this.animatedValue, { ...animationConfig, toValue:index }).start()

  panResponder = null;
  createPanResponder = ()=> this.panResponder = ReactNative.PanResponder.create({
      onStartShouldSetPanResponder: () => !this.props.disabled,
      onPanResponderGrant: this.onDragStart,
      onPanResponderMove: (evt, gestureState)=>{
          const current = gestureState.dx + this.clampedValue;
          const sensitivity = this.state.itemWidth/2;
          const selectedIndex = this.selectedIndex;
          const shouldGoBack = this.selectedIndex >0 &&  current <0  && (current < -sensitivity);
          const shouldGoForward = this.selectedIndex < this.props.items.length-1 &&  current >0  && (current > sensitivity);

          if (shouldGoBack) {
              this.selectedIndex --;
              this.clampedValue = -gestureState.dx;
              this.props.onChange(this.props.items[selectedIndex-1])
          }
          if (shouldGoForward) {
              this.clampedValue = -gestureState.dx
              this.selectedIndex ++;
              this.props.onChange(this.props.items[selectedIndex+1])
          }
      },
      onPanResponderRelease: ()=> {
          this.clampedValue =0;
      }
  })

  getAnimatedValue = (itemWidth,selectedIndex)=> {
      return itemWidth* selectedIndex;
  }

  onLayout = (e)=> {
      e.currentTarget.measure((x, y, width, height, pageX, pageY)=>{
          if (this.state.width !== width) {
              const itemWidth = ((width-(
                  this.props.paddingX || CONTAINER_PADDING_X
              )*2)/this.props.items?.length);
              this.animatedValue = new Animated.Value(this.getAnimatedValue(itemWidth, this.getSelectedIndex()))
              this.createPanResponder();
              this.setState({ width: width, itemWidth })
          }
      })
  }

  componentDidUpdate(prevProps: Readonly<ComponentType>, prevState: Readonly<{}>, snapshot?: any) {
      if (prevProps.value !== this.props.value) {
          this.selectedIndex = this.getSelectedIndex(); // we catch the current value as to not interrupt animation
          this.animateTo(this.getAnimatedValue(this.state.itemWidth, this.getSelectedIndex()))
      }
  }

  _onPanGestureEvent =  Animated.event([{ nativeEvent: { x: this.animatedValue } }], {
      useNativeDriver: true,
  });

  render() {
      const { props:{ items, onChange, disabled, trackStyle, barStyle, textStyle, textPressedStyle, textActiveStyle }, state:{ width } }=this
      if(!items) {return}
      const itemWidth = this.state.itemWidth;

      const positionStyle = !!this.animatedValue && {
          width: itemWidth,
          transform:[{ translateX:this.animatedValue }]
      }


      return <View
        onLayout={this.onLayout}
        style={[
            styles.track,
            disabled && styles.disabled,
            trackStyle
        ]}>
          <Row style={styles.barContainer}>
              <Animated.View
                {...this.panResponder?.panHandlers} todo pan
                style={[styles.bar, barStyle, positionStyle]}>
                  <Flex/>
              </Animated.View>
              {items.map((item, i)=>(
                  <Pressable
                    pointerEvents={this.props.value === item?"none":"auto"}
                    disabled={disabled}
                    onPress={()=>{
                        this.selectedIndex = i;
                        this.props.onChange(item)
                    }}
                    style={styles.labelContainer}
                    key={i}
                      >
                      {({ pressed })=>(
                          <Text style={[
                              styles.label,
                              textStyle,
                              pressed && styles.labelPressed,
                              pressed && textPressedStyle,
                              this.props.value === item && styles.labelActive,
                              this.props.value === item && textActiveStyle,
                          ]}>
                              {item.label}
                          </Text>
                      )}
                  </Pressable>
              ))}
          </Row>
      </View>
      ;
  }
}

const styles = ReactNative.StyleSheet.create({
    track: {
        height:CONTAINER_HEIGHT,
        borderRadius: 8,
        paddingHorizontal: CONTAINER_PADDING_X,
        paddingVertical: CONTAINER_PADDING_Y,
        backgroundColor:'#ededef',
        position:'relative',
    },
    barContainer: {
        flexDirection:"row",
        alignItems:'center',
        flex:1,
    },
    labelContainer: {
        flex:1,
        alignItems:'center'
    },
    bar : {
        backgroundColor:'white',
        position:"absolute",
        borderRadius: CONTAINER_RADIUS,
        height:"100%",
    },
    label: {
        fontSize: 14,
        color:"#666"
    },
    labelActive: {
        color:"#333"
    },
    disabled: {
        opacity:0.5
    },
    labelPressed: {
        color:"#333"
    }
})

export default TheComponent;
