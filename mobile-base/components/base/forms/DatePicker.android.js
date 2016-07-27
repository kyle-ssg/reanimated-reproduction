/**
 * Created by kylejohnson on 23/11/2015.
 */
var Picker = Component({
    getInitialState: function () {
        return {
            date: new Date(this.props.value)
        }
    },
    onDateChange: function (date) {
        this.setState({date: date});
    },
    confirm: function () {
        this.props.onConfirm(this.state.date);
    },
    render: function () {
        return <View/>;
        return (
            <BlurView style={{flex:1, justifyContent:'center', alignItems:'center'}} blurType="light">
                <DatePickerIOS
                    minimumDate={this.props.minimumDate}
                    onDateChange={this.onDateChange}
                    mode={this.props.mode}
                    date={this.state.date}/>
                <View
                    style={[Styles.row, {flex:1, paddingBottom:10, marginRight:5, justifyContent:'space-between'}]}>
                    <Button
                        style={{width:Dimensions.get("window").width/2 - 20, backgroundColor:colour.selectButtonCancel}}
                        onPress={this.props.onCancel}><Text>{this.props.noText || 'Cancel'}</Text></Button>

                    <Button style={{marginLeft:5, width:Dimensions.get("window").width/2 - 20}}
                            onPress={this.confirm}><Text>{this.props.yesText || 'Confirm'}</Text></Button>
                </View>
            </BlurView>
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
            <Picker minimumDate={this.props.minimumDate} onConfirm={this.confirm} onCancel={closeSelect}
                    mode={this.props.mode} value={this.props.value}/>
        ), 250)
    },
    now: function () {
        this.props.onChange(moment().toISOString());
    },
    render: function () {
        return (
            <View style={[Styles.row, {justifyContent:'center'}]}>
                <TextInput ref="input" style={[Styles.input, {flex:1}]} onFocus={this.showDatePicker}
                           onConfirm={this.confirm}
                           value={Format.dateAndTime(this.props.value)}/>
                {this.props.showNow ? (
                    <Button style={{marginLeft:10, marginBottom:10}} onPress={this.now}><Text>Now</Text></Button>
                ) : null}
            </View>
        )
    }
})