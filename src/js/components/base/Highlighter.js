/**
 * Created by kylejohnson on 31/07/2016.
 */
const Highlighter = class extends React.Component {
    displayName:'Highlighter'

    shouldComponentUpdate (newProps) {
        return newProps.search !== this.props.search || newProps.value !== this.props.value;
    }

    constructor (props, context) {
        super(props, context);
        this.state = {};
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

Highlighter.defaultProps = {
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

Highlighter.propTypes = {
    className: OptionalString,
    search: OptionalString,
    value: OptionalString,
    renderHighlight: OptionalFunc,
    renderText: OptionalFunc
};

module.exports = Highlighter;