import React, { Component } from "react";
import Animation from 'lottie-react-native';

class LoadingInterstitial extends Component {
    static propTypes = {};

    state = {};

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
                      style={{ width: "30%" }}
                      loop={true}
                      autoPlay
                      source={require("../assets/lottie/interstitial-loader.json")}
                    />
                    <H3 style={[Styles.textCenter, Styles.pt20]}>{text}</H3>
                </Flex>
            </Flex>
        );
    }
}

module.exports = LoadingInterstitial;
