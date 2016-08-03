var MaterialSwitch = Component({
  padding: 4,

  getDefaultProps() { //see style_base for colours
    return {
      active: false,
      style: {},
      inactiveButtonColor: colour.switch,
      inactiveButtonPressedColor: colour.switch,
      activeButtonColor: colour.switchActive,
      activeButtonPressedColor: colour.switchActive,
      buttonShadow: {
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 1,
        shadowOffset: { height: 1, width: 0 },
      },
      activeBackgroundColor: colour.switchActiveBackground,
      inactiveBackgroundColor: colour.switchBackground,
      buttonRadius: 12,
      switchWidth: 40,
      switchHeight: 18,
      buttonContent: null,
      enableSlide: true,
      switchAnimationTime: 200
    };
  },

  componentWillReceiveProps: function (newProps) {
    if (newProps.value != this.props.value) {
      if (newProps.value) {
        this.activate(true);
      } else {
        this.deactivate(true)
      }
    }
  },

  getInitialState() {
    var w = this.props.switchWidth - Math.min(this.props.switchHeight, this.props.buttonRadius * 2);
    return {
      width: w,
      state: this.props.value,
      position: new Animated.Value(this.props.value ? w : 0),
      active: new Animated.Value(this.props.value ? 1 : 0),
    };
  },

  start: {},

  updateActive: function (width) {
    this.state.active.setValue(width / this.state.width);
  },
  componentWillMount: function () {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        this.setState({ pressed: true });
        this.start.x0 = gestureState.x0;
        this.start.pos = this.state.position._value;
        this.start.moved = false;
        this.start.state = this.state.state;
        this.start.stateChanged = false;
      },
      onPanResponderMove: (evt, gestureState) => {
        if (!this.props.enableSlide) return;

        this.start.moved = true;
        if (this.start.pos == 0) {
          if (gestureState.dx <= this.state.width && gestureState.dx >= 0) {
            this.state.position.setValue(gestureState.dx);
            this.updateActive(gestureState.dx);
          }
          if (gestureState.dx > this.state.width) {
            this.state.position.setValue(this.state.width);
            this.updateActive(this.state.width);
          }
          if (gestureState.dx < 0) {
            this.state.position.setValue(0);
            this.updateActive(0);
          }
        }
        if (this.start.pos == this.state.width) {
          if (gestureState.dx >= -this.state.width && gestureState.dx <= 0) {
            this.state.position.setValue(this.state.width + gestureState.dx);
            this.updateActive(this.state.width + gestureState.dx);
          }
          if (gestureState.dx > 0) {
            this.state.position.setValue(this.state.width);
            this.updateActive(this.state.width + gestureState.dx);
          }
          if (gestureState.dx < -this.state.width) {
            this.state.position.setValue(0);
            this.updateActive(0);
          }
        }
        var currentPos = this.state.position._value;
        this.onSwipe(currentPos, this.start.pos,
          () => {
            if (!this.start.state) this.start.stateChanged = true;
            this.setState({ state: true })
          },
          ()=> {
            if (this.start.state) this.start.stateChanged = true;
            this.setState({ state: false })
          });
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        this.setState({ pressed: false });
        var currentPos = this.state.position._value;
        if (!this.start.moved || (Math.abs(currentPos - this.start.pos) < 5 && !this.start.stateChanged)) {
          this.toggle();
          return;
        }
        this.onSwipe(currentPos, this.start.pos, this.activate, this.deactivate);
      },
      onPanResponderTerminate: (evt, gestureState) => {
        var currentPos = this.state.position._value;
        this.setState({ pressed: false });
        this.onSwipe(currentPos, this.start.pos, this.activate, this.deactivate);
      },
      onShouldBlockNativeResponder: (evt, gestureState) => true,
    });
  },

  onSwipe(currentPosition, startingPosition, onChange, onTerminate) {
    if (currentPosition - startingPosition >= 0) {
      if (currentPosition - startingPosition > this.state.width / 2 || startingPosition == this.state.width) {
        onChange();
      } else {
        onTerminate();
      }
    } else {
      if (currentPosition - startingPosition < -this.state.width / 2) {
        onTerminate();
      } else {
        onChange();
      }
    }
  },

  activate(silent) {
    Animated.timing(
      this.state.position,
      {
        toValue: this.state.width,
        duration: this.props.switchAnimationTime,
      }
    ).start();
    Animated.timing(
      this.state.active,
      {
        toValue: 1,
        duration: this.props.switchAnimationTime,
      }
    ).start();

    this.changeState(true, silent);
  },

  deactivate(silent) {
    Animated.timing(
      this.state.position,
      {
        toValue: 0,
        duration: this.props.switchAnimationTime,
      }
    ).start();
    Animated.timing(
      this.state.active,
      {
        toValue: 0,
        duration: this.props.switchAnimationTime,
      }
    ).start();
    this.changeState(false, silent);
  },

  changeState(state, silent) {

    if (!silent && this.props.onChange) {
      this.props.onChange(state);
    }

    this.setState({ state: state });
  },

  toggle() {
    if (this.state.state) {
      this.deactivate();
    } else {
      this.activate();
    }
  },

  render() {
    var doublePadding = this.padding * 2 - 2;
    var halfPadding = doublePadding / 2;
    return (
      <View style={[{ padding: this.padding, position: 'relative' }, this.props.style]}>
        <Animated.View style={{
          marginRight: 5,
          backgroundColor: this.state.active.interpolate({
            inputRange: [0, 1],
            outputRange: [colour.switchBackground, colour.switchActiveBackground]  // 0 : 150, 0.5 : 75, 1 : 0
          }),
          height: this.props.switchHeight,
          width: this.props.switchWidth,
          borderRadius: this.props.switchHeight / 2,
        }}/>
        <TouchableHighlight underlayColor='transparent' activeOpacity={1} onPress={() => {
          this.toggle();
        }}
                            style={{
                              height: Math.max(this.props.buttonRadius * 2 + doublePadding, this.props.switchHeight + doublePadding),
                              width: this.props.switchWidth + doublePadding,
                              position: 'absolute',
                              top: 1,
                              left: 1
                            }}>
          <View style={[Styles.row, { height: 34, marginRight: 20 }, this.props.style]}>

            <Animated.View style={[{
              backgroundColor: this.state.active.interpolate({
                inputRange: [0, 1],
                outputRange: [colour.switch, colour.switchActive]
              }),
              height: this.props.buttonRadius * 2,
              width: this.props.buttonRadius * 2,
              borderRadius: this.props.buttonRadius,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              position: 'absolute',
              top: halfPadding + this.props.switchHeight / 2 - this.props.buttonRadius,
              left: this.props.switchHeight / 2 > this.props.buttonRadius ? halfPadding : halfPadding + this.props.switchHeight / 2 - this.props.buttonRadius,
              transform: [{ translateX: this.state.position }]
            },
              this.props.buttonShadow]}
                           {...this._panResponder.panHandlers}
            >
            </Animated.View>
          </View>

        </TouchableHighlight>
      </View>
    )
  }
});

module.exports = MaterialSwitch;
