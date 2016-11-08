import NavBar from '../navbars/NavbarModal'
module.exports = Component({
    renderScene: function() {
        return (
            <View style={{flex:1, backgroundColor: colour.rowLighter, justifyContent:'center', padding:10}}>
               <Text>Hi</Text>
            </View>
        )
    },
    render: function() {
        return (

            <Navigator
                style={{flex:1}}
                navigationBar={
                    <Navigator.NavigationBar
                        style = {[Styles.navBar]}
                        routeMapper={NavBar()}
                    />
                }
                sceneStyle={Styles.navContent}
                ref="navigator"
                renderScene={this.renderScene}
                initialRoute={{title:"Example Modal"}}
            />
        )
    }
});
