import React from 'react';
module.exports = (function () {
    function Highlighter({ valueLabel = 'label', renderText, renderHighlight, renderOption = renderOption }) {
        this.input = '';
        this.valueLabel = valueLabel;
        if (renderText) {
            this.renderText = renderText;
        }
        if (renderOption)
            this.renderOption = renderOption;
        if (renderHighlight)
            this.renderHighlight = renderHighlight;
    }

    Highlighter.prototype = {
        renderOption (item, text) {
            return text || item;
        },

        renderText (text) {
            return (
                <span>{text}</span>
            );
        },
        renderHighlight (text) {
            return (
                <mark>{text}</mark>
            );
        },
        chop (v, i) {
            var
                regexp = new RegExp(i, 'i'),
                mark = v.search(regexp),
                len = i.length;
            if (mark === -1) {
                return v;
            } else {
                return [].concat(
                    this.renderText(v.substr(0, mark)),
                    this.renderHighlight(v.substr(mark, len)),
                    this.chop(v.substr(mark + len), i)
                );
            }
        },
        onBlur () {
            this.input = '';
        },
        onInputChange (inp) {
            this.input = inp
                .replace(/^ +/, '')
                .replace(/ +$/, '');
        },
        optionRenderer (val) {
            var res,
                isFocused = val.focusedOption == val.option,
                classes = ['Select-option'];
            isFocused && classes.push('is-focused');
            if (this.renderHighlight && this.input && this.input.length) {
                res = this.chop(val.option[this.valueLabel], this.input);
            }
            else {
                res = val.option[this.valueLabel];
            }

            return (
                <div
                    className={classes.join(' ')}
                    onMouseOver={() => val.focusOption(val.option)}
                    onClick={() => val.selectValue(val.option)}>
                    {this.renderOption(val.option, res)}
                </div>
            );
        }
    };
    return Highlighter;
}());