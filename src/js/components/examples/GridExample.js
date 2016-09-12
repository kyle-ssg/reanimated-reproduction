const GridExample = class extends React.Component {
  displayName: 'GridExample'

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }

  render () {
    return (
      <div>
        <h1>Row</h1>
        <Row className="list-group">
          <Flex className="list-item centered-container">
            <h2>Flex 1</h2>
          </Flex>
          <Flex value={2} className="list-item centered-container">
            <h2>Flex 2</h2>
          </Flex>
          <Flex value={3} className="list-item centered-container">
            <h2>Flex 3</h2>
          </Flex>
        </Row>
        <h1>Row space=true</h1>
        <Row space={true}>
          <div className="centered-container">
            <h2>1</h2>
          </div>
          <div className="centered-container">
            <h2>2</h2>
          </div>
        </Row>

        <div className="row centered-container">

          <div className="col-md-6 col-xs-12">
            <FormGroup>
              <Panel title={"Longer Half"}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac odio viverra nulla viverra feugiat a
                  in
                  neque. Aliquam pulvinar urna diam, sit amet congue ligula ultricies quis. Pellentesque vestibulum
                  felis
                  et
                  eros egestas dignissim. Pellentesque iaculis fringilla lectus vitae rutrum. Suspendisse eget viverra
                  neque, commodo dapibus lacus. Pellentesque non enim lorem. Pellentesque vel facilisis sapien, nec
                  hendrerit lorem. Quisque iaculis eros lacinia, gravida elit sollicitudin, tempor turpis.
                </p>
              </Panel>
            </FormGroup>
          </div>

          <div className="col-md-6 col-xs-12">
            <FormGroup>
              <Panel title={"Shorter Half"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Panel>
            </FormGroup>
          </div>

        </div>
      </div>
    );
  }
};

GridExample.propTypes = {};

module.exports = GridExample;
