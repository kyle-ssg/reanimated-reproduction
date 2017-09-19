import React, {Component, PropTypes} from 'react';

const TheComponent = class extends Component {
	displayName: 'TheComponent'

	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	componentDidMount() {
		setTimeout(() => {
			this.animation.play();
		}, 500)

		setTimeout(() => this.setState({loaded: true}), 2000)
	}

	render() {
		return (
			<View style={styles.lightboxOuter}>
				<View style={{
					backgroundColor: 'white',
					alignSelf: 'center',
					top: 0,
					zIndex: 2,
					position: 'absolute',
					borderRadius: 40,
					width: 80,
					height: 80,
					justifyContent: 'center'
				}}>
					<View style={{
						backgroundColor: pallette.secondary,
						alignSelf: 'center',
						borderRadius: 35,
						width: 70,
						height: 70,
						justifyContent: 'center',
						alignItems: 'center'
					}}>
						<Animation
							ref={animation => {
								this.animation = animation;
							}}
							style={{width: 70, height: 70}} source={require('./success.json')}/>
					</View>

				</View>
				<View style={styles.lightbox}>
					<View style={[{alignSelf: 'center'}]}>
						<H1 style={Styles.textCenter}>Congratulations</H1>
						{this.state.loaded && (
							<H3 style={Styles.textCenter}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
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
						<H3 style={Styles.textCenter}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
							odio viverra nulla viverra
						</H3>
					</View>

					<FormGroup>
						<Button style={{alignSelf: 'center', width: 200}} onPress={Navigation.dismissLightBox}>
							Ok
						</Button>
					</FormGroup>
				</View>
			</View>
		);
	}
};

TheComponent.propTypes = {};

var styles = StyleSheet.create({
	lightboxOuter: {
		backgroundColor:'transparent',
		justifyContent:'center',
		alignItems:'center',
		paddingBottom:40,
		paddingTop:40,
	},

	lightbox: {
		paddingTop:40,
		width: DeviceWidth - 40,
		borderRadius: 5,
		backgroundColor: 'white'
	}
})
module.exports = TheComponent;
