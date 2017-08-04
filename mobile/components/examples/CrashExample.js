const badCode = ()=> {
    console.log("XXX".FOO.BAR);
}
module.exports = () => (
    <Flex style={Styles.container}>
        <FormGroup>
            <Button onPress={Crashlytics.crash}>
                <Text style={Styles.buttonText}>Crash app!</Text>
            </Button>
        </FormGroup>
        <FormGroup>
            <Button
                onPress={() => {
                    Platform.OS == 'ios' ? Crashlytics.recordError('something went wrong but not really!') : Crashlytics.logException('something went wrong but not really!')
                }}>
                <Text style={Styles.buttonText}>Record non-fatal JS error</Text>
            </Button>
        </FormGroup>
        <Button onPress={badCode}>
            <Text style={Styles.buttonText}>Generate a JS crash</Text>
        </Button>
    </Flex>
)