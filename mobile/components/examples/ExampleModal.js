module.exports = Component({
    render: function () {
        return (
            <Flex>
                <Header>
                    <Column style={{width:50}}>

                    </Column>

                    <Flex style={[Styles.centeredContainer]}>
                        <Text style={Styles.navBarText}>Title</Text>
                    </Flex>

                    <Column style={{ width: 50, alignItems:'flex-end' }}>
                        <TouchableOpacity onPress={closeModal}
                                          transparent>
                            <ION style={Styles.navBarButtonText} name="ios-close"/>
                        </TouchableOpacity>
                    </Column>
                </Header>
                <Flex style={Styles.body}></Flex>
            </Flex>
        )
    }
});
