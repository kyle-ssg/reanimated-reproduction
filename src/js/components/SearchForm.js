// https://github.com/react-tools/react-table
module.exports = class extends React.Component {
	constructor () {
		super();


		this.state = {};
	}

	renderSelectRow = (row, index, selectedRow, highlightRow) => {
		const isHovered = selectedRow === index;
		const isActive = this.state.value == row;
		return (
			<div onMouseOver={() => highlightRow(index)}>
				<Row space>
					<a className={cn({
						'btn': true,
						'btn-link': true,
						'btn-link-hover': isHovered,
						'btn-link-active': isActive
					})}>
						{isHovered ? row.name : <Highlighter search={this.props.searchValue} value={row.name}/>}
					</a>
				</Row>
			</div>
		);
	};

	renderSelectedItem = (value, remove) => (
		<Row style={{ width: 400 }} space className="chip">
			<span>{value.name}</span>
			<span onClick={remove} className="chip-icon">
        <span className="fa fa-close"/>
      </span>
		</Row>
	)

	render () {

		return (
			<form onSubmit={(e) => {
				e.preventDefault();
				this.props.onSubmit(e)
			}}>
				<Row>
					<AutoComplete
						ref="autocomplete"
						inputProps={{ style: { width: 400, paddingBottom: 10 } }}
						placeholder={this.props.placeholder}
						isAbsolute={true}
						value={this.props.value}
						onSelectChange={this.props.onChange}
						onSearchChange={this.props.search}
						renderSelectedItem={this.renderSelectedItem}
						renderRow={this.renderSelectRow}
						data={this.props.data}
					/>
				</Row>
			</form>
		)
	}
};

