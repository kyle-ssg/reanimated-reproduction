import React from 'react';
import ION from 'react-native-vector-icons/Ionicons';
import SnapCarousel from 'react-native-snap-carousel';
import propTypes from 'prop-types';
import ScaledImage from '../../ScaledImage';

const buttonSize = em(2);

class Carousel extends React.PureComponent {
    static propTypes = {
        width: propTypes.number,
        height: propTypes.number,
        uris: propTypes.arrayOf(propTypes.string),
    }

    _renderItem = ({ item, index }) => {
        const { width, height } = this.props;
        const priority = index === 0 ? 'high' : 'normal';
        return (
            <View style={{ width, height, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ScaledImage
                  allowUpscale
                  key={item}
                  width={width}
                  priority={priority}
                  source={{ uri: item }}
                />
            </View>
        );
    }

    render = () => {
        const { uris, width, height } = this.props;
        if (uris.length === 1) {
            return this._renderItem({ item: uris[0] });
        }
        return (
            <>
                <SnapCarousel
                  ref={(c) => { this._carousel = c; }}
                  data={uris}
                  renderItem={this._renderItem}
                  sliderWidth={width}
                  itemWidth={width}
                  containerCustomStyle={{ backgroundColor: '#404040', marginBottom: -height }}
                />
                <View style={[styles.buttonContainer, { width, height }]} pointerEvents="box-none">
                    <Button style={[styles.button, { marginLeft: em(0.5) }]} onPress={() => this._carousel.snapToPrev()} >
                        <ION name="ios-arrow-back" style={[styles.buttonIcon]}/>
                    </Button>
                    <Button style={[styles.button, { marginRight: em(0.5) }]} onPress={() => this._carousel.snapToNext()} >
                        <ION name="ios-arrow-forward" style={[styles.buttonIcon]}/>
                    </Button>
                </View>
            </>
        );
    }
}


const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: 0,
    },
    button: {
        width: buttonSize,
        height: buttonSize,
        backgroundColor: 'white',
        borderRadius: buttonSize / 2,
        opacity: 0.6,
    },
    buttonIcon: {
        fontSize: styleVariables.fontSizeBase * 1.5,
    },
});

export default Carousel;
