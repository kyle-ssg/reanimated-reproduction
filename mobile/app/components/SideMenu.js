import React, { Component, PropTypes } from 'react';

const SideMenuLink = props => (
    <TouchableOpacity onPress={() => props.onPress(props.to)} style={Styles.menuItem}>
        <Row style={{ flexWrap: 'nowrap' }}>
            <Column>
                {props.image
                    ? <Image style={Styles.menuItemImage} source={props.image} />
                    : <ION style={Styles.menuItemIcon} name={props.icon} />
				}
            </Column>
            <Column>
                <Text style={Styles.menuItemText}>
                    {props.text}
                </Text>
            </Column>
        </Row>
    </TouchableOpacity>
);

SideMenuLink.displayName = 'SideMenuLink';

SideMenuLink.propTypes = {
    children: OptionalObject,
};

const TheComponent = class extends Component {
	displayName: 'TheComponent'

	constructor(props, context) {
	    super(props, context);
	    this.state = {};
	}


	linkPressed = (link) => {
	    routeHelper.closeDrawer(this.props.navigator);
	    this.props.navigator.handleDeepLink({
	        link,
	    });
	};

	render() {
	    return (
    <LinearGradient
      style={[{ flex: 1 }, Styles.statusContent, Styles.menuShadow]}
      colors={[pallette.fromGradient, pallette.toGradient]}
    >
        <TouchableOpacity style={styles.closeButton}>
            <ION name="ios-close-circle-outline"/>
        </TouchableOpacity>
        <Flex>
            <SideMenuLink
              onPress={this.linkPressed} text="Link 1" to="link1"
              icon="ios-link"
            />
            <SideMenuLink
              onPress={this.linkPressed} text="Link 2" to="link2"
              icon="ios-link"
            />
        </Flex>
    </LinearGradient>
	    );
	}
};

var styles = StyleSheet.create({
    closeButton: {
        backgroundColor: 'transparent',
        position: 'absolute',
        left: -100,
        zIndex: 10,
    },
});

TheComponent.propTypes = {};

module.exports = TheComponent;
