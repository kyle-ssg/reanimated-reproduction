import React, {Component, PropTypes} from 'react';
const PanelSearch = class extends Component {
    displayName = 'PanelSearch';
    state = {};

    filter() {
        const {search} = this.state;
        const {items, filterRow} = this.props;
        if (filterRow && search) {
            return _.filter(items, (i) => filterRow(i, search.toLowerCase()))
        }
        return items;
    }

    render() {
        const {search} = this.state;
        const {title, items, renderRow, renderNoResults} = this.props;
        var filteredItems = this.filter(items);
        return (!filteredItems || !filteredItems.length) ? renderNoResults : (
            <Panel
                className={this.props.className}
                title={this.props.title}
                icon={this.props.icon}
                action={(
                    <Row onClick={() => this.refs.input.focus()}>
                        <input ref="input"
                               onChange={(e) => this.props.onChange || this.setState({search: Utils.safeParseEventValue(e)})}
                               type="text"/>
                        <span style={{marginLeft: 10, position: 'absolute'}} className="icon ion-ios-search"></span>
                    </Row>
                )}>
                <div id={this.props.id} className="search-list">
                    {filteredItems && filteredItems.length ?
                        filteredItems.map(renderRow) : (renderNoResults && !search) ? renderNoResults : (
                            <div>No results {search && <span>for <strong>{search}</strong></span>}</div>
                        )}
                </div>
            </Panel>
        );
    }
};

PanelSearch.propTypes = {
    title: propTypes.string,
    items: propTypes.any,
    search: propTypes.string,
    renderRow: propTypes.func.isRequired,
    renderNoResults: propTypes.node,
    filterRow: propTypes.func,
};

module.exports = PanelSearch;
