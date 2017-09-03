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

		return (
			<div className="centered-container">
				{this.state.value ? (
					<div className="centered-container">
						<FormGroup>
							<Row style={{width: 400}} space className="chip">
								<span>{this.state.value}</span>
								<span onClick={() => this.setState({value: ''})} className="chip-icon">
								<span className="fa fa-close"/>
								</span>
							</Row>
						</FormGroup>
						<FormGroup className="animated fadeIn">
							Hi
						</FormGroup>
					</div>
				) : (
					<div className="card-0" style={{width: 400}}>
						<div onClick={() => {
							this.props.history.push("/customer");
						}} className="list-item">
							<Row space>
								Customer Search
								<span className="fa fa-chevron-right list-item-nav"></span>
							</Row>
						</div>
						<div onClick={() => {
							this.props.history.push("/agent");
						}} className="list-item">
							<Row space>
								Agent Search
								<span className="fa fa-chevron-right list-item-nav"></span>
							</Row>
						</div>
					</div>
				)}
			</div>
		)
	}
};

