module.exports = (props) => (
    <Row style={Styles.navBar}>
        <Column style={{ width: 50 }}>

        </Column>

        <Flex style={[Styles.centeredContainer]}>
            <Text style={Styles.navBarText}>{props.title}</Text>
        </Flex>

        <Column style={{ width: 50, alignItems: 'flex-end' }}>
            <TouchableOpacity onPress={closeModal}
                              transparent>
                <ION style={Styles.navIcon} name="ios-close"/>
            </TouchableOpacity>
        </Column>
    </Row>
);
