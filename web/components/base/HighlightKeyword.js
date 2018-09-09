/**
 * Created by kylejohnson on 31/07/2016.
 */
import React from 'react';
import propTypes from 'prop-types';

const HighlightKeyword = window.HighlightKeyword = class extends React.Component {
    displayName = 'HighlightKeyword';
    state = {};

    shouldComponentUpdate (newProps) {
        return newProps.search !== this.props.search || newProps.value !== this.props.value;
    }

    chop (text, search) { //recursively render bits of text into renderText and renderHighlight sections
        var regexp = new RegExp(search, 'i'),
            mark = text.search(regexp),
            len = search.length;

        if (!search || !text || mark === -1) {
            return this.props.renderText(text);
        } else {
            return [].concat(
                this.props.renderText(text.substr(0, mark)),
                this.props.renderHighlight(text.substr(mark, len)),
                this.chop(text.substr(mark + len), search)
            );
        }
    }

    render () {
        if (!this.props.value || !this.props.search) {
            return this.props.renderText(this.props.value);
        }

        return <span className={this.props.className}>{this.chop(this.props.value, this.props.search)}</span>;
    }
};

HighlightKeyword.defaultProps = {
    renderText (text) {
        return (
            <span>{text}</span>
        );
    },
    renderHighlight (text) {
        return (
            <mark>{text}</mark>
        );
    }
};

HighlightKeyword.propTypes = {
    className: propTypes.string,
    search: propTypes.string,
    value: propTypes.string,
    renderHighlight: propTypes.node,
    renderText: propTypes.string
};

export default HighlightKeyword;
