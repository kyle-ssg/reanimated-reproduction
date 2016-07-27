/**
 * Created by kylejohnson on 09/01/2016.
 */
module.exports = class extends React.Component {
    constructor(props) {
        super();
        this.state = {
            value: props.value,
            animatedTabPosition: new Animated.Value(this.calculateTabPosition({value: props.value}, props))
        }
    }

    static propTypes = {
        value: RequiredString,
        itemWidth: OptionalNumber, // defaults to equal per child
        onChange: RequiredFunc,
        width: OptionalNumber
    };

    static defaultProps = {
        width: Dimensions.get("window").width
    };

    calculateTabPosition(state, props) {
        var position = _.indexOf(_.map(props.children, function(child) {
                return child.props.value
            }), state.value),
            itemWidth = props.itemWidth || props.width / props.children.length;
        return (position) * itemWidth;
    }

    componentWillReceiveProps(newProps) {
        if (newProps.value !== this.props.value && newProps.value !== this.state.value) {
            this.setState({value: newProps.value});
        }
    }

    componentWillUpdate(newProps, newState) {
        if (newState.value != this.state.value) {
            Animated.timing(                          // Base: spring, decay, timing
                this.state.animatedTabPosition,                 // Animate `bounceValue`
                {
                    toValue: this.calculateTabPosition(newState, newProps),
                    duration: 200,
                    easing: Easing.inOut(Easing.ease)
                }
            ).start();
        }
    }

    onChange(val, data) {
        if (this.state.value !== val) {
            this.setState({value:val},()=>
                this.props.onChange(val, data)
            )
        }
    }

    render() {
        var itemWidth = this.props.itemWidth || this.props.width / this.props.children.length;
        return (
            <View style={[Styles.tabContainer, this.props.style]}>
                <ScrollView bounces={false} horizontal={true}>
                    <View>

                        {!this.props.withoutLine && (
                            <Animated.View
                                style={[Styles.tabLine, {width: itemWidth, transform: [{ translateX: this.state.animatedTabPosition }]}]}/>
                        )}
                        <View style={{flexDirection:'row'}}>
                            { this.props.children.map(function(tabItem) {
                                tabItem.props.isActive = this.state.value == tabItem.props.value;

                                return (
                                    <TouchableOpacity
                                        key={tabItem.props.value}
                                        activeOpacity={0.8}
                                                      onPress={_.partial(this.onChange.bind(this), tabItem.props.value, tabItem.props.data)}
                                                      style={[Styles.tabItem, {width:itemWidth}]}>
                                        {tabItem}
                                    </TouchableOpacity>
                                )
                            }.bind(this))}
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
};