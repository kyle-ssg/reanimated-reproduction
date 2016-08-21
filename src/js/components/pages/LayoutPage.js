/**
 * Created by kylejohnson on 21/08/2016.
 */
const TheComponent = class extends React.Component {
  displayName: 'TheComponent'

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }

  render () {
    return (
      <div>

        <h1>
          Row
        </h1>
        <Row space>
          <span>Space 1</span>
          <span>Space 2</span>
        </Row>
        <Row>
          <span>Span 1</span>
          <Flex style={{ backgroundColor: 'grey' }} className="centered-container">Flex</Flex>
          <span>Span 2</span>
        </Row>

        <h1>
          Grid
        </h1>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            col-md-6 col-xs-12
          </div>
          <div className="col-md-6 col-xs-12">
            col-md-6 col-xs-12
          </div>
        </div>

        <h1>
          Responsive Ordering
        </h1>
        <div className="row">
          <div className="col-md-6 col-xs-12 col-md-order-1 col-xs-order-2">
            col-md-order-1 col-xs-order-2
          </div>
          <div className="col-md-6 col-xs-12 col-md-order-2 col-xs-order-1">
            col-md-order-2 col-xs-order-1
          </div>
        </div>
      </div>
    );
  }
};

TheComponent.propTypes = {};

module.exports = TheComponent;
