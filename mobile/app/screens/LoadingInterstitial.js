import React, { Component } from 'react';
import Animation from 'lottie-react-native';
import { BackHandler } from 'react-native';
import propTypes from 'prop-types';
import loader from '../assets/lottie/interstitial-loader.json';

class LoadingInterstitial extends Component {
    static propTypes = {
        text: propTypes.string,
    };

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => true;

    render() {
        const { text } = this.props;

        return (
            <Flex style={[Styles.body, Styles.centeredContainer]}>
                <Flex style={[Styles.centeredContainer]}>
                    <Animation
                      style={{ width: '30%' }}
                      loop
                      autoPlay
                      source={loader}
                    />
                    <H3 style={[Styles.textCenter, Styles.pt20]}>{text}</H3>
                </Flex>
            </Flex>
        );
    }
}

module.exports = LoadingInterstitial;
