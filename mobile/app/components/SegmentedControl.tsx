import React, { FunctionComponent, useEffect, useState } from 'react'; // we need this to make JSX compile
import { useMeasure } from 'components/utility-components/useMeasure';
import { Pressable, TextStyle, ViewStyle } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent
} from 'react-native-gesture-handler';
import Animated, { Easing } from 'react-native-reanimated';
import { timing } from 'react-native-redash';
function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}
const CONTAINER_PADDING_Y = 6;
const CONTAINER_PADDING_X = 6;
const CONTAINER_HEIGHT = 44;
const CONTAINER_RADIUS = 8;

const SegmentedControl: FunctionComponent<SegmentControlType> = ({
  items,
  disabled,
  textStyle,
  textPressedStyle,
  textActiveStyle,
  barStyle,
  trackStyle,
  paddingX = CONTAINER_PADDING_X,
  paddingY = CONTAINER_PADDING_Y,
  value,
  onChange,
}) => {
  const [initialised, setInitialised] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(
    new Animated.Value<number>(0),
  );
  const [size, onLayout] = useMeasure((initialSize)=>{
    const initialWidth = initialSize.width;
    const initialSliderWidth = (initialWidth - paddingX * 2) * (1 / items.length)
    const index = items.indexOf(value) || 0;
    setSliderPosition(new Animated.Value(initialSliderWidth * index));
    setInitialised(true)
  });
  const sliderWidth = size && (size.width - paddingX * 2) * (1 / items.length)
  // This hook is used to animate the slider position
  Animated.useCode(() => {
    if (initialised) {
      const index = items.indexOf(value);
      if (index!== -1) {
        return Animated.set(
          sliderPosition,
          timing({
            from: sliderPosition,
            to: sliderWidth*index,
            easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            duration: 250,
          }),
        );
      }
    }
  }, [value,initialised,items]);

  const handleGestureEvent = (event: PanGestureHandlerGestureEvent): void => {
    if (disabled) return;

    const { x } = event.nativeEvent;

    const calculatedIndex = Math.floor((x / size.width) * items.length);
    const index = clamp(calculatedIndex, 0, items.length - 1);
    const item = items[index];
    if (item !==value) {
      onChange(item);
    }
  };

  return (
      <View style={[styles.track, trackStyle, { paddingHorizontal:paddingX, paddingVertical:paddingY }]} onLayout={onLayout}>
          {!!sliderWidth && (

          <PanGestureHandler onGestureEvent={handleGestureEvent}>
              <View style={styles.barContainer}>
                  <>
                      <Animated.View style={[styles.bar, barStyle, { width: sliderWidth, transform: [{ translateX: sliderPosition, }], }]}/>
                      {items.map((item, i) => (
                          <Pressable
                            key={i}
                            pointerEvents={value === item ? 'none' : 'auto'}
                            disabled={disabled}
                            onPress={() => {
                                  onChange(item);
                              }}
                            style={styles.labelContainer}
                          >
                              {({ pressed }) => (
                                  <Text style={[
                                        styles.label,
                                        textStyle,
                                        pressed && styles.labelPressed,
                                        pressed && textPressedStyle,
                                        value === item && styles.labelActive,
                                        value === item && textActiveStyle,
                                    ]}
                                  >
                                      {item.label}
                                  </Text>
                                )}
                          </Pressable>
                        ))}
                  </>
              </View>
          </PanGestureHandler>
            )}
      </View>
  );
};

const styles = ReactNative.StyleSheet.create({
  track: {
    height:CONTAINER_HEIGHT,
    borderRadius: 8,
    justifyContent:'center',
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
});

export default SegmentedControl;

type SegmentOption = { value: any; label: string }

type BaseType = {
  value: any
  onChange: (item: any) => void,
  disabled?: boolean,
  trackStyle?: ViewStyle,
  barStyle?: ViewStyle,
  textStyle?: TextStyle,
  textActiveStyle?: TextStyle,
  textPressedStyle?: TextStyle,
  paddingX?: number,
  paddingY?: number,
}
type SegmentLabelType = BaseType & { item: SegmentOption }
type SegmentControlType = BaseType & { items: SegmentOption[] }
