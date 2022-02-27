"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singular = exports.plural = void 0;
const tslib_1 = require("tslib");
const pluralize_1 = (0, tslib_1.__importDefault)(require("pluralize"));
/**
 * Returns the plural of an English word.
 *
 * @export
 * @param {string} word
 * @param {number} [amount]
 * @returns {string}
 */
function plural(word, amount) {
    return (0, pluralize_1.default)(word, amount);
}
exports.plural = plural;
function singular(word) {
    return pluralize_1.default.singular(word);
}
exports.singular = singular;
