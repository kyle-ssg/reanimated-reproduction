import React, { Component } from 'react';
import filter from 'lodash/filter';

import Panel from './base/forms/Panel';
import Row from './base/grid/Row';

class PanelSearch extends Component {
  static displayName = 'PanelSearch';

  state = {};

  filter() {
    const { search } = this.state;
    const { items, filterRow } = this.props;
    if (filterRow && search) {
      return filter(items, i => filterRow(i, search.toLowerCase()));
    }
    return items;
  }

  render() {
    const { search } = this.state;
    const {
      props: {
        className, icon, id, items, onChange, renderNoResults, renderRow, title,
      },

    } = this;
    const filteredItems = this.filter(items);
    return (!filteredItems || !filteredItems.length) ? renderNoResults : (
      <Panel
        className={className}
        title={title}
        icon={icon}
        action={(
          <Row onClick={() => this.input.focus()}>
            <input
              ref={input => this.input = input}
              onChange={e => onChange || this.setState({ search: Utils.safeParseEventValue(e) })}
              type="text"
            />
            <span style={{ marginLeft: 10, position: 'absolute' }} className="icon ion-ios-search"/>
          </Row>
        )}
      >
        <div id={id} className="search-list">
          {filteredItems && filteredItems.length
            ? filteredItems.map(renderRow) : (renderNoResults && !search) ? renderNoResults : (
              <div>
                No results
                {search && (
                  <span>
                    for
                    <strong>{search}</strong>
                  </span>
                )}
              </div>
            )}
        </div>
      </Panel>
    );
  }
}

PanelSearch.propTypes = {
  className: propTypes.string,
  filterRow: propTypes.func,
  icon: propTypes.string,
  id: propTypes.string,
  items: propTypes.any,
  onChange: propTypes.func,
  renderNoResults: propTypes.node,
  renderRow: propTypes.func.isRequired,
  title: propTypes.string,
};

module.exports = PanelSearch;
