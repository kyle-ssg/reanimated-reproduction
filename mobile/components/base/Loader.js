/**
 * Created by kylejohnson on 09/09/15.
 */
const Loader = Component({
    render() {
        return (
          <ActivityIndicator style={this.props.style} color={colour.loader}/>
        );
    }
});

module.exports = Loader;
