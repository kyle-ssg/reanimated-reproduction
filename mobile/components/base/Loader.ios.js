/**
 * Created by kylejohnson on 09/09/15.
 */
var ProgressViewExample = Component({

    getInitialState() {
        return {
            progress: 0,
        };
    },

    render() {
        return (
            <ActivityIndicatorIOS color={colour.loader}/>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20
    }
});

module.exports = ProgressViewExample;