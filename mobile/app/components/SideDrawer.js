import React, { Component } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RNNDrawer } from 'react-native-navigation-drawer-extension';

const SideDrawer = class extends Component {
    static propTypes = {
    };

    static displayName = 'SideDrawer';

    state = {};

    goHome = () => {
        Navigation.push("root", routes.homeScreen());
        RNNDrawer.dismissDrawer();
    };

    dismiss = () => RNNDrawer.dismissDrawer();

    render() {
        return (
            <View style={[Styles.body]}>
                <Container style={Styles.mt20}>
                    <FormGroup pb0>
                        <Row>
                            <TouchableOpacity onPress={this.dismiss}>
                                <FontAwesome5 size={25} style={[Styles.pr20, Styles.pl10, Styles.textGreyMedium]} name="times" />
                            </TouchableOpacity>
                            <H2 style={[Styles.textGreyMedium, Styles.mb20]}>Menu</H2>
                        </Row>
                    </FormGroup>
                    <ListItem listText="Home" icon={<FontAwesome5 style={Styles.textGrey} size={20} name="home" />}/>
                    <ListItem listText="Logout" icon={<FontAwesome5 style={Styles.textGrey} size={20} name={'sign-out-alt'} />}/>
                </Container>
            </View>
        );
    }
};

module.exports = SideDrawer;
