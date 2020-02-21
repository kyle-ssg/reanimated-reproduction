/**
 * Created by kylejohnson on 28/01/2017.
 */
import React, { Component, PureComponent } from 'react';
import propTypes from 'prop-types';
import withPerformance from 'common/providers/withPerformance';

// Automatically sets relevant head tags for seo, see _app for the remainder tags
const Item = class extends Component {
    static displayName = 'Item';


    constructor(props) {
        super(props);
        console.log(this.props.index);
    }

    componentDidUpdate() {
        console.log('test');
    }

    render() {
        // const Comp = ReactNative.Text;
        const Comp = Text;
        return (
            <View style={{
                margin: 20,
            }}
            >
                <View>
                    {/* <ION style={{ color: "red" }} name="ios-chatboxes"/> */}
                    <Row>
                        <Comp>test</Comp>
                        <Comp>test dsad sads ad ad asd asd asdsa dasd sad asd asd asd sad sadsa dasdasd asd sada</Comp>
                        <Comp>test dsad sads ad ad asd asd asdsa dasd sad asd asd asd sad sadsa dasdasd asd sada</Comp>
                    </Row>
                </View>
            </View>
        );
    }
};

const HomeScreen = class extends Component {
  static displayName = 'HomeScreen';

  static propTypes = {
      componentId: propTypes.string,
      navigator: propTypes.object,
  };

  constructor(props, context) {
      super(props, context);
      this.state = {
          data: this.getData(),
      };
  }

  getData = () => _.range(0, 1000).map((i) => ({
      id: i,
      'glossary': {
          'title': 'example glossary',
          'GlossDiv': {
              'title': 'S',
              'GlossList': {
                  'GlossEntry': {
                      'ID': 'SGML',
                      'SortAs': 'SGML',
                      'GlossTerm': 'Standard Generalized Markup Language',
                      'Acronym': 'SGML',
                      'Abbrev': 'ISO 8879:1986',
                      'GlossDef': {
                          'para': 'A meta-markup language, used to create markup languages such as DocBook.',
                          'GlossSeeAlso': ['GML', 'XML'],
                      },
                      'GlossSee': 'markup',
                  },
              },
          },
      },
  }))

  componentDidMount() {
      Navigation.events().bindComponent(this);
      setTimeout(() => {
          this.setState({
              ready: true,
          });
      }, 200);
  }

    refreshData =() => {
        this.setState({ data: this.getData() });
        // setTimeout(() => {
        //     this.setState({ data: this.getData() });
        // }, 5);
        // setTimeout(() => {
        //     this.setState({ data: this.getData() });
        // }, 10);
    }

    render() {
        return (
            <Flex style={[Styles.body]}>
                <Text>SSG Frontend Boilerplate</Text>
                <Button onPress={() => Navigation.push(this.props.componentId, routes.formScreen())}>Form Example</Button>
                <Button onPress={this.refreshData}>Refresh</Button>
                {this.state.ready && (
                    <FlatList
                      initialNumToRender={4}
                      data={this.state.data}
                      renderItem={({ item, index }) => (
                          <View>
                              <Item
                                index={index}
                                item={item}
                              />
                          </View>
                      )}
                    />
                )}

            </Flex>
        );
    }
};

// const styles = StyleSheet.create({
//
// });

module.exports = withPerformance(HomeScreen, 'Home Screen', 'http://localhost:3000/value');
