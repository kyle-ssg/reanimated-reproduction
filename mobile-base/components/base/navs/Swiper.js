/**
 * Created by kylejohnson on 30/09/15.
 */
var _Swiper = require('react-native-swiper');

module.exports = Component({
    propTypes: {
        height: OptionalNumber, //default to screensize
        width: OptionalNumber,
        dot: OptionalElement,
        activeDot: OptionalElement
    },
    getDefaultProps: function () {
        return {
            activeDot: <View
                style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}}/>,
            dot: <View
                style={{backgroundColor: '#ddd', opacity:0.5, width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}}/>

        }
    },

    render: function () {
        return (
            <_Swiper
                showButtons={true}
                dot={this.props.dot}
                activeDot={this.props.activeDot}
                onChange={this.onChange}
                autoplay={this.props.autoplay}
                ref="swiper"
                index={this.props.value}
                loop={false}>
                    {this.props.children}
            </_Swiper>
        )

    }
})

var styles = StyleSheet.create({
    buttonIcon: {
        color: colour.btnOrangeBackgroundHighlight
    },
    wrapper: {
        flex: 1,
        marginBottom: 100
    },
})
