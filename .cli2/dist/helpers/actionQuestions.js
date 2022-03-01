"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inquirer_1 = (0, tslib_1.__importDefault)(require("inquirer"));
function camelCase(str) {
    return str.split(' ').map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join('');
}
const keywordFor = (res, keyword, value) => {
    if (res.toLowerCase() === keyword) {
        return value;
    }
    return res;
};
async function default_1() {
    const prefix = await inquirer_1.default.prompt({
        name: "prefix",
        type: "input",
        message: `What is the action prefix? (e.g set -> setThing)`,
        default: "set"
    });
    const entity = await inquirer_1.default.prompt({
        name: "entity",
        type: "input",
        message: `What is entity name? (e.g thing -> ${prefix.prefix.toLowerCase()}Thing)`,
        default: "thing"
    });
    const gitAdd = await inquirer_1.default.prompt({
        name: "add",
        type: "list",
        message: "Git add?",
        choices: ["Yes", "No"]
    });
    return {
        gitAdd: gitAdd.add,
        entity: entity.entity,
        prefix: prefix.prefix.toLowerCase()
    };
}
exports.default = default_1;
