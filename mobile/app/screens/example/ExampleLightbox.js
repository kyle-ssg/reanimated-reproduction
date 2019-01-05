import React, { Component, PropTypes } from 'react';

const TheComponent = class extends Component {
	displayName: 'TheComponent'

	constructor(props, context) {
	    super(props, context);
	    this.state = {};
	}

	componentDidMount() {
	    setTimeout(() => {
	        this.animation.play();
	    }, 500);

	    setTimeout(() => this.setState({ loaded: true }), 2000);
	}

	render() {
	    return (
    <View style={Styles.lightboxOuter}>
        <ViewOverflow style={Styles.lightbox}>
            <ViewOverflow style={{ alignSelf: 'center', width: 80, height: 80 }}>
                <View style={Styles.roundedAnimationContainer}>
                    <View style={Styles.roundedAnimationInner}>
                        <Animation
                          ref={(animation) => {
									    this.animation = animation;
                          }}
                          loop={false}
                          style={{ width: 70, height: 70 }} source={require('./success.json')}
                        />
                    </View>
                </View>
            </ViewOverflow>
            <View style={[Styles.padded, { alignSelf: 'center', marginTop: -40 }]}>
                <H1 style={Styles.textCenter}>Congratulations</H1>
                {this.state.loaded && (
                <H3 style={Styles.textCenter}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
								ac
								odio viverra nulla viverra
								odio viverra nulla viverra
								odio viverra nulla viverra
								odio viverra nulla viverra
								odio viverra nulla viverra
								odio viverra nulla viverra
								odio viverra nulla viverra

                </H3>
                )}
                <H3 style={Styles.textCenter}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
							odio viverra nulla viverra

                </H3>
            </View>

            <FormGroup>
                <Button style={{ alignSelf: 'center', width: 200 }} onPress={this.props.navigator.dismissLightBox}>
							Ok

                </Button>
            </FormGroup>
        </ViewOverflow>
    </View>
	    );
	}
};

TheComponent.propTypes = {};

const styles = StyleSheet.create({

});
module.exports = TheComponent;
