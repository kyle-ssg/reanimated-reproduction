import ReactDOM from 'react-dom';
// https://github.com/react-tools/react-table
module.exports = class extends React.Component {
    constructor() {
        super();

        this.handleModelChange = this.handleModelChange.bind(this);

        this.state = {
            model: 'Example text'
        };
    }

    handleModelChange = (model) => {
        this.setState({
            model: model
        });
    };


    render() {
        const data = [{
            name: 'Tanner Linsley',
            age: 26,
            friend: {
                name: 'Jason Maurer',
                age: 23,
            }
        }]

        const columns = [{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
        }, {
            Header: 'Age',
            accessor: 'age',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        }, {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Friend Name',
            accessor: d => d.friend.name // Custom value accessors!
        }, {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: 'friend.age'
        }];

        return (
            <div className="container">
                <FormGroup>
                    <Editor value="<strong>ds</strong>"/>
                </FormGroup>
                <FormGroup>
                    dsads
                    <Table
                        SubComponent={(row) => {
                            return (
                                <FormGroup>

                                    <div className="container">
                                        <Table
                                            data={[{ id: 'bla', name: 'bla' }]}
                                            columns={[{ Header: 'Name', accessor: 'name' }, {
                                                Header: "Id",
                                                accessor: 'id'
                                            }]}
                                            defaultPageSize={3}
                                            showPagination={false}
                                        />
                                    </div>
                                </FormGroup>
                            )
                        }}
                        minRows={0}
                        data={data}
                        columns={columns}
                    />
                </FormGroup>
            </div>
        )
    }
};