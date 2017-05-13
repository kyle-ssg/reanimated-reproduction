import React, {Component, PropTypes} from 'react';
var SelectableSectionsListView = require('react-native-alphabetlistview');

const TheComponent = class extends Component {
    displayName: 'TheComponent'

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
    }

    scrollToLetter = (key) => {
        if (yourData[key]) {
            console.log('Scrolling to', key);
            this.refs.list.refs.test.refs.list.scrollToIndex({
                viewPosition: 0,
                animated:false,
                index: yourData[key].startIndex
            });
        }
    };

    getItemLayout = (data, index) => (
        { length: itemHeight, offset: itemHeight * index, index }
    )

    render() {
        return (
            <Flex style={Styles.body}>
                <Flex>
                    <ReactNative.SectionList
                        ref="list"
                        getItemLayout={this.getItemLayout}
                        initialNumToRender={100}
                        renderItem={({ item }) => <View key={Utils.GUID()} style={{ height: itemHeight }}><Text>{item}</Text></View>}
                        renderSectionHeader={({ section }) => (
                            <TouchableOpacity onPress={() => this.scrollToLetter(section.key)}
                                              style={[{ height: itemHeight, flex: 1 }, Styles.centeredContainer]}>
                                <Text>{section.key}</Text>
                            </TouchableOpacity>
                        )}
                        sections={sections}
                    />
                </Flex>
                <View
                    onMoveShouldSetResponder={(e) => {
                        var itemNumber = Math.floor((e.nativeEvent.locationY)/letterHeight);
                        var letter = Object.keys(yourData)[itemNumber];
                        if (letter!=currentLetter) {
                            this.scrollToLetter(letter);
                            currentLetter=letter;
                            setTimeout(()=>{currentLetter=''},3000)
                        }
                    }}
                    style={{ position: 'absolute', width: 64, bottom: 0, top: 0, right: 10 }}>
                    {Object.keys(yourData).map((k) => (
                        <View pointerEvents="none" style={[{ height: letterHeight,justifyContent:'center',alignItems:'center', borderBottomWidth:1, width: 64 }]}>
                            <Text>{k}</Text>
                        </View>
                    ))}
                </View>
            </Flex>
        );
    }
};

TheComponent.propTypes = {};

var currentLetter = '';
var itemHeight = 33;
var letterHeight = (Dimensions.get('window').height-64)/26;
var yourData = {
    A: ['some', 'entries', 'are here'],
    B: ['some', 'entries', 'are here'],
    C: ['some', 'entries', 'are here'],
    D: ['some', 'entries', 'are here'],
    E: ['some', 'entries', 'are here'],
    F: ['some', 'entries', 'are here'],
    G: ['some', 'entries', 'are here'],
    H: ['some', 'entries', 'are here'],
    I: ['some', 'entries', 'are here'],
    J: ['some', 'entries', 'are here'],
    K: ['some', 'entries', 'are here'],
    L: ['some', 'entries', 'are here'],
    M: _.range(0, 100).map(() => 'test'),
    N: ['some', 'entries', 'are here'],
    O: ['some', 'entries', 'are here'],
    P: ['some', 'entries', 'are here'],
    Q: ['some', 'entries', 'are here'],
    R: ['some', 'entries', 'are here'],
    S: ['some', 'entries', 'are here'],
    T: ['some', 'entries', 'are here'],
    U: ['some', 'entries', 'are here'],
    V: ['some', 'entries', 'are here'],
    X: ['some', 'entries', 'are here'],
    Y: ['some', 'entries', 'are here'],
    Z: ['some', 'entries', 'are here'],
};
var totalItems = 0;

var sections = Object.keys(yourData).map((key) => {
    var data = yourData[key];
    yourData[key].startIndex = totalItems;

    totalItems += data.length + 1;
    return { key, data };
});


module.exports = TheComponent;
