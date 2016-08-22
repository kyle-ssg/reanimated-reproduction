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
        <Row className="list-group"space>
          <span className="list-group-item">Space 1</span>
          <span className="list-group-item">Space 2</span>
        </Row>
        <Row className="list-group">
          <span className="list-group-item">Span 1</span>
          <Flex style={{ backgroundColor: '#eee' }} className="list-group-item centered-container">Flex</Flex>
          <span className="list-group-item">Span 2</span>
        </Row>

        <h1>
          Grid
        </h1>
        <div className="row list-group">
          <div className="list-group-item col-md-6 col-xs-12">
            col-md-6 col-xs-12
          </div>
          <div className="list-group-item col-md-6 col-xs-12">
            col-md-6 col-xs-12
          </div>
        </div>

        <h1>
          Responsive Ordering
        </h1>
        <div className="row list-group">
          <div className="list-group-item order-example col-md-6 col-xs-12 col-md-order-1 col-xs-order-2">
            col-md-order-1 col-xs-order-2
          </div>
          <div className="list-group-item order-example col-md-6 col-xs-12 col-md-order-2 col-xs-order-1">
            col-md-order-2 col-xs-order-1
          </div>
        </div>

      </div>






    );
  }
};

TheComponent.propTypes = {};

module.exports = TheComponent;
