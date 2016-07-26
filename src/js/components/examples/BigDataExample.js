import React from 'react';
import {FlexTable, AutoSizer, FlexColumn, SortDirection} from 'react-virtualized';
const size = 5000;
var list = _.map(_.range(0, size), function (i) {
    return { id: i + 1, description: Utils.GUID() };
}).reverse();

import Highlighter from '../base/addons/react-select-highlighter';
const highlighter = new Highlighter({
    valueLabel: 'description',
    renderOption: (item, text) => (
        <div key={item.id}>
            {text} : {item.id}
        </div>
    ),
    renderText: (text) => (
        <span>{text}</span>
    ),
    renderHighlight: (text) => (
        <strong>{text}</strong>
    )
});

module.exports = class extends React.Component {
    displayName = 'HomePage';

    constructor(props, context) {
        super(props, context);
        this.state = {
            sort: {
                sortBy: "id",
                sortDirection: SortDirection.DESC
            },
            value: []
        };
    }

    handleSelectChange = (value) => {
        this.setState({ value });
    };

    renderHeader({ dataKey, sortBy, sortDirection }) {
        var classes = ['FlexTable__headerRowContent'],
            isSorting = dataKey == sortBy;
        isSorting && classes.push('FlexTable__headerRowContent--sorting');

        return (
            <div className={classes.join(' ')}>
            <span>
                {dataKey} {isSorting && (sortDirection == 'ASC' ? "↑" : '↓')}
            </span>
            </div>
        );
    }

    render() {
        // Grid data as an array of arrays
        return (
            <div>
                <h1>{size} Rows</h1>
                <h2>Multiselect with Virtualization</h2>
                <Select
                    placeholder="Select your stuff"
                    options={list}
                    simpleValue
                    multi
                    labelKey='description'
                    valueKey='description'
                    onChange={this.handleSelectChange}
                    onBlur={highlighter.onBlur.bind(highlighter)}
                    onInputChange={highlighter.onInputChange.bind(highlighter)}
                    optionRenderer={highlighter.optionRenderer.bind(highlighter)}
                    value={this.state.value}
                />

                <h2>Sortable</h2>
                <AutoSizer disableHeight>
                    {({ width }) => (
                        <FlexTable
                            className="table"
                            height={300}
                            width={width}
                            sort={(sort) => {
                                list = _.orderBy(list, [sort.sortBy], [sort.sortDirection == SortDirection.ASC ? 'asc' : 'desc']);
                                this.setState({ sort: sort });
                            }}
                            sortBy={this.state.sort.sortBy}
                            sortDirection={this.state.sort.sortDirection}
                            headerHeight={44}
                            rowHeight={44}
                            rowCount={list.length}
                            rowGetter={
                                ({ index }) => list[index]
                            }
                        >
                            <FlexColumn
                                headerRenderer={this.renderHeader}
                                className="test"
                                label='ID'
                                dataKey='id'
                                width={100}
                            />

                            <FlexColumn
                                headerRenderer={this.renderHeader}
                                width={width}
                                label='Description'
                                dataKey='description'
                                cellRenderer={({ rowData }) => (
                                    <div style={{ width: 200 }}>The description {rowData.description}</div>
                                )}
                            />

                        </FlexTable>
                    )}
                </AutoSizer>
            </div>
        );
    }
};