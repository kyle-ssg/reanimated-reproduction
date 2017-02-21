const TheComponent = class extends React.Component {
    displayName: 'TheComponent'

    constructor (props, context) {
        super(props, context);
        this.state = { data: _.range(0, 100) };
    }

    refresh = () => {
        this.setState({
            isLoading: true
        });
    }

    loadMore = () => {
        this.setState({
            isLoading: true
        });
        setTimeout(()=> {
            const length = this.state.data.length;
            this.setState({
                isLoading: false,
                data: this.state.data.concat(_.range(length, length + 10))
            });
        }, 2000);
    }

    renderRow (data) {
        return (
            <FormGroup>
                <Card style={{ height: 100 }}>
                    <Text style={Styles.listItemText}>Hi, I am row {data}</Text>
                </Card>
            </FormGroup>
        );
    }

    renderLoading = () => (
        <View style={[Styles.centeredContainer, { height: 60 }]}>
            <Text>{'Loading'}</Text>
        </View>
    )

    render () {
        return (
            <Flex>
                <InfiniteScroll
                    initialListSize={10}
                    data={this.state.data}
                    isLoading={this.state.isLoading}
                    loadMore={this.loadMore}
                    onRefresh={this.refresh}
                    renderRow={this.renderRow}
                    renderLoading={this.renderLoading}
                />
            </Flex>
        );
    }
};

TheComponent.propTypes = {};

module.exports = TheComponent;
