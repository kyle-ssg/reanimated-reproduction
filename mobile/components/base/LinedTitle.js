/**
 * Created by kylejohnson on 06/06/2016.
 */
const LinedTitle = class extends React.Component {
  render () {
    return (
      <Row style={Styles.formGroup} space>
        <Flex style={Styles.column}>
          <Divider/>
        </Flex>
        <View style={Styles.column}>
          {this.props.children}
        </View>
        <Flex style={Styles.column}>
          <Divider/>
        </Flex>
      </Row>
    );
  }
};

LinedTitle.propTypes = {
  children: OptionalElement
};

module.exports = LinedTitle;
