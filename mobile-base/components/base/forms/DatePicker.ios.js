/**
 * Created by kylejohnson on 23/11/2015.
 */
var Picker = Component({
    getInitialState: function () {
        return {
            date: this.props.value ? new Date(this.props.value) : new Date()
        }
    },
    onDateChange: function (date) {
        this.setState({date: date});
    },
    confirm: function () {
        setTimeout(function () {
            this.props.onConfirm(moment(this.state.date).toISOString());
        }.bind(this), 500);
    },
    render: function () {
        return (
            <View style={{flex:1, backgroundColor:colour.modalBackground, justifyContent:'center', alignItems:'center'}}>
                <DatePickerIOS
                    minimumDate={this.props.minimumDate}
                    maximumDate={this.props.maximumDate}
                    onDateChange={this.onDateChange}
                    minuteInterval={this.props.minuteInterval}
                    mode={this.props.mode}
                    date={this.state.date}/>
                <View
                    style={[Styles.row, {flex:1, marginBottom:10, padding:10, width:Dimensions.get("window").width, justifyContent:'space-between'}]}>
                    <Button
                        style={{width:Dimensions.get("window").width/2 - 20, backgroundColor:colour.selectButtonCancel}}
                        onPress={this.props.onCancel}><Text>{this.props.noText || 'Cancel'}</Text></Button>

                    <Button style={{marginLeft:5, width:Dimensions.get("window").width/2 - 20}}
                            onPress={this.confirm}><Text>{this.props.yesText || 'Confirm'}</Text></Button>
                </View>
            </View>
        )
    }
})
module.exports = Component({
    confirm: function (date) {
        this.props.onChange(moment(date).toISOString());
        closeSelect();
    },

    showDatePicker: function () {
        this.refs.input.blur();
        openSelect((
            <Picker minuteInterval={this.props.minuteInterval || 5} minimumDate={this.props.minimumDate}
                    maximumDate={this.props.maximumDate} onConfirm={this.confirm} onCancel={closeSelect}
                    mode={this.props.mode} value={this.props.value}/>
        ), 1)
    },
    now: function () {
        this.props.onChange(moment().toISOString());
    },
    render: function () {
        return (
            <View style={[Styles.row, {justifyContent:'center'}]}>
                <TextInput placeholder={this.props.placeholder} ref="input" style={[Styles.input, {flex:1}]}
                            onFocus={this.showDatePicker}
                           onConfirm={this.confirm}
                           value={Format.dateAndTime(this.props.value)}/>
                {this.props.showNow ? (
                    <Button style={{marginLeft:10, marginBottom:10}} onPress={this.now}><Text>Now</Text></Button>
                ) : null}
            </View>
        )
    }
})