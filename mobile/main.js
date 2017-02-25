import React from 'react';
import {
    nativeHistory,
    Route,
    Router,
    StackRoute,
    withRouter,
} from 'react-router-native';

import App from './components/App';
import HomePage from './components/examples/Examples';
import OtherPage from './components/examples/OtherPage';

window.Header = (props)=> {
    return (
        <Row style={Styles.navBar}>
            {props.children}
        </Row>
    )
};

const DefaultHeader = withRouter((props) => {
    console.log(props);
    const canGoBack = props && props.scenes.length > 1;
    return (
        <View>
            <Header>
                <Column style={{ opacity: props.position, width: 50 }}>
                    {
                        props.position ? (
                            <TouchableOpacity onPress={props.router.goBack}
                                              transparent>
                                <ION style={Styles.navBarButtonText} name="ios-arrow-back"/>
                            </TouchableOpacity>
                        ) : <View/>
                    }
                </Column>
                <Flex style={[{ opacity: props.progress }, Styles.centeredContainer]}>
                    <Text style={Styles.navBarText}>{props.title}</Text>
                </Flex>
                <Column style={[Styles.navButtonRight,{ opacity: props.progress, width: 50}]}>
                    <ION style={Styles.navIcon} name="ios-menu"/>
                </Column>
            </Header>
        </View>
    );
});

const ModalHeader = withRouter((props) => {
    console.log(props);
    const canGoBack = props && props.scenes.length > 1;
    return (
        <View style={{backgroundColor:'white'}}>
            <Header>
                <Column style={{ opacity: props.position, width: 50 }}>
                    {
                        canGoBack ? (
                            <TouchableOpacity onPress={props.router.goBack}
                                              transparent>
                                <ION style={Styles.navBarButtonText} name="ios-arrow-back"/>
                            </TouchableOpacity>
                        ) : <View/>
                    }
                </Column>

                <Flex style={[Styles.centeredContainer, { opacity: props.position }]}>
                    <Text style={Styles.navBarText}>Title</Text>
                </Flex>

                <Column style={{ opacity: props.position, width: 50 }}>
                    <TouchableOpacity onPress={props.router.goBack}
                                      transparent>
                        <ION style={Styles.navBarButtonText} name="ios-close"/>
                    </TouchableOpacity>
                </Column>

            </Header>
        </View>
    );
});


module.exports = (
    /* Address Bar can be toggled on or off by setting the addressBar prop */
    <Router history={nativeHistory}>
        <StackRoute path="master" component={App}>
            <Route
                transition="horizontal-card-stack"
                path="/" component={HomePage} overlayComponent={(props) =><DefaultHeader {...props} title="Home" />} />
            <Route
                transition="horizontal-card-stack"

                path="/other" component={OtherPage} overlayComponent={(props)=><DefaultHeader {...props} title="Other Page"/>}/>
        </StackRoute>
    </Router>
);