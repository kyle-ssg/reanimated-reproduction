module.exports = function(context) {
    window.openModal = function(Component, size, direction, animation, duration) {
        context.setState({
            showModal: 1,
            modalComponent: Component,
            modalSize: size,
            modalDirection: direction,
            modalAnimation: animation && (animation !== "fade") ? animation : Animated.timing,
            modalFade: animation == "fade",
            modalDuration: duration
        });
    }.bind(context);

    window.closeModal = function() {
        context.setState({
            showModal: 0,
            modalAnimation: Animated.timing,
        });
        setTimeout(function() {
            context.setState({
                modalComponent: null
            });
        }.bind(this), 500)
    }.bind(context);


    window.openSelect = function(Component, size, direction, animation, duration) {
        context.setState({
            showSelect: 1,
            selectComponent: Component,
            selectSize: size,
            selectDirection: direction,
            selectAnimation: animation && (animation !== "fade") ? animation : Animated.timing,
            selectFade: animation == "fade",
            selectDuration: duration
        });
    }.bind(context);

    window.closeSelect = function() {
        
        context.setState({
            showSelect: 0,
            selectAnimation: Animated.timing,
        });
        setTimeout(function() {
            context.setState({
                selectComponent: null
            });
        }.bind(this), 500)
    }.bind(context);


};