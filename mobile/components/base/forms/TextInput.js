/**
 * Created by kylejohnson on 14/11/2015.
 */
module.exports = Component({
    clear: function() {
        this.refs.input.clear();
    },
    blur: function() {
        this.refs.input.blur();
    },
    focus: function() {
        this.refs.input.focus();
    },
    getInitialState: function() {
        return {
            height: new Animated.Value(this.getHeight(this.props.text || ""))
        }
    },
    componentWillReceiveProps: function(newProps) {
        if (this.props.multiline && this.props.maxLines && newProps.value != this.props.value) {
            Animated.timing(this.state.height, {
                toValue: this.getHeight(newProps.value),
                duration: 200
            }).start();
        }
    },
    onChangeText: function(text) { //use more familiar onChange
        if (this.props.onChangeText) {
            this.props.onChangeText(text);
        } else if (this.props.onChange) {
            this.props.onChange(text);
        }
    },
    getHeight: function(text) {
        var lines = text.match(/\n/g);
        var linesToShow = Math.min((Math.max(lines && lines.length || 0), (this.props.minLines || 0)), this.props.maxLines);
        if (isNaN(linesToShow)) {
            linesToShow = 0;
        }
        return (linesToShow * 16) +  (this.props.height || styleVariables.inputHeight) ;
    },
    render: function() {
        return  <Animated.View style={[Styles.inputContainer, this.props.style, {height:this.state.height}]}>
            <ReactNative.TextInput
                placeholderTextColor={styleVariables.placeholderTextColor}
                ref={"input"}
                onChangeText={this.onChangeText}
                multiline={this.props.multiline}
                secureTextEntry={this.props.secureTextInput}
                onFocus={this.props.onFocus}
                value={this.props.value}
                placeholder={this.props.placeholder}
                editable={this.props.editable || !this.props.disabled}
                style={[Styles.input, this.props.textStyle]}
                onSubmitEditing={this.props.onSubmitEditing}
                keyboardType={this.props.keyboardType}/>
        </Animated.View>
    }
})