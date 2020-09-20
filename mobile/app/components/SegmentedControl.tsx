import React, { FunctionComponent, useCallback, useState } from 'react'; // we need this to make JSX compile
import { useMeasure } from "components/utility-components/useMeasure";
import { Pressable, TextStyle, ViewStyle } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, { Easing } from "react-native-reanimated";
import { timing } from "react-native-redash/src";
import { easingConfigSlide } from '../project/reanimations';
function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}
const CONTAINER_PADDING_Y = 6;
const CONTAINER_PADDING_X = 6;
const CONTAINER_HEIGHT = 44;
const CONTAINER_RADIUS = 8;


const SegmentText: FunctionComponent<SegmentItemType> = ({
  value,
  isActive,
  disabled,
  onChange,
  item,
  textStyle,
  textPressedStyle,
  textActiveStyle,
}) => {
  const onPress = useCallback(()=>{
    onChange(item);
  },[onChange,item]);

  return (
      <View style={styles.labelContainer}>
          <Pressable
            pointerEvents={isActive ? "none" : "auto"}
            disabled={disabled}
            onPress={onPress}
          >
              {({ pressed }) => (
                  <Text
                    style={[
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
      </View>

  );
};

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
    new Animated.Value<number>(0)
  );
  const [size, onLayout] = useMeasure((initialSize) => {
    const initialWidth = initialSize.width;
    const initialSliderWidth =
      (initialWidth - paddingX * 2) * (1 / items.length);
    const index = items.indexOf(value) || 0;
    setSliderPosition(new Animated.Value(initialSliderWidth * index));
    setInitialised(true);
  });
  const sliderWidth = size && (size.width - paddingX * 2) * (1 / items.length);
  // This hook is used to animate the slider position
  Animated.useCode(() => {
    if (initialised) {
      const index = items.indexOf(value);
      if (index !== -1) {
        return Animated.set(
          sliderPosition,
          timing({
            from: sliderPosition,
            to: sliderWidth * index,
            ...easingConfigSlide
          })
        );
      }
    }
  }, [value, initialised, items]);

  const handleGestureEvent = useCallback((event: PanGestureHandlerGestureEvent): void => {
    if (disabled) return;

    const { x } = event.nativeEvent;

    const calculatedIndex = Math.floor((x / size.width) * items.length);
    const index = clamp(calculatedIndex, 0, items.length - 1);
    const item = items[index];
    if (item !== value) {
      onChange(item);
    }
  }, [disabled,items,size,onChange,value]);

  return (
      <View
        style={[
        styles.track,
          disabled && styles.disabled,
        trackStyle,
        { paddingHorizontal: paddingX, paddingVertical: paddingY },
      ]}
        onLayout={onLayout}
      >
          {!!sliderWidth && (
          <PanGestureHandler onGestureEvent={handleGestureEvent}>
              <View style={styles.barContainer}>
                  <>
                      <Animated.View
                        style={[styles.bar, barStyle, {
                            width: sliderWidth,
                            transform: [{ translateX: sliderPosition }],
                          }]}
                      />
                      {items.map((item, i) => (
                          <SegmentText
                            disabled={disabled}
                            isActive={value === item}
                            item={item}
                            key={i}
                            onChange={onChange}
                            textActiveStyle={textActiveStyle}
                            textPressedStyle={textPressedStyle}
                            textStyle={textStyle}
                            value={value}
                          />
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
    borderRadius: styleVariables.baseRadius,
    paddingHorizontal: CONTAINER_PADDING_X,
    paddingVertical: CONTAINER_PADDING_Y,
    backgroundColor: palette.culturedGrey,
    position:'relative',
  },
  barContainer: {
    flexDirection:"row",
    alignItems:'center',
    flex:1,
  },
  labelContainer: {
    elevation:11, // This is needed for android to place the labels above the bar
    flex:1,
  },
  bar : {
    backgroundColor:'white',
    position:"absolute",
    borderRadius: CONTAINER_RADIUS,
    height:"100%",
    shadowColor: "#201C26",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  label: {
    lineHeight:33,
    width:"100%",
    textAlign:'center',
    fontSize: 14,
    color: palette.independenceBlue,
    opacity: 0.65
  },
  labelActive: {
    color: palette.independenceBlue,
    opacity: 1
  },
  disabled: {
    opacity:0.5
  },
  labelPressed: {
    color: palette.independenceBlue,
    opacity: 1
  }
})

export default SegmentedControl;

type SegmentOption = { value: any; label: string };
type SegmentItemType = {
  isActive:boolean;
  value: any;
  item: any;
  disabled: boolean;
  textStyle?: TextStyle;
  textActiveStyle?: TextStyle;
  textPressedStyle?: TextStyle;
  onChange: (item:any)=>any
}
type BaseType = {
  value: any;
  onChange: (item: any) => void;
  disabled?: boolean;
  trackStyle?: ViewStyle;
  barStyle?: ViewStyle;
  textStyle?: TextStyle;
  textActiveStyle?: TextStyle;
  textPressedStyle?: TextStyle;
  paddingX?: number;
  paddingY?: number;
};
type SegmentLabelType = BaseType & { item: SegmentOption };
type SegmentControlType = BaseType & { items: SegmentOption[] };
