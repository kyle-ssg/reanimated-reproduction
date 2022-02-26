"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const inquirer_1 = (0, tslib_1.__importDefault)(require("inquirer"));
const plural_1 = require("./plural");
function camelCase(str) {
    return str.split(' ').map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join('');
}
const keywordFor = (res, keyword, value) => {
    if (res.toLowerCase() === keyword) {
        return value;
    }
    return res;
};
async function default_1(isPlural, hasId) {
    const entity = await inquirer_1.default.prompt({
        name: "entity",
        type: "input",
        message: `What is entity name? (e.g thing -> createThing)`,
        default: "thing"
    });
    const plural = (0, plural_1.plural)(entity.entity);
    const extraUrl = hasId ? "/:id" : "";
    const url = await inquirer_1.default.prompt({
        name: "url",
        type: "input",
        message: `What is the url? (type y for /${plural}${extraUrl})`,
        default: `/${entity.entity}${extraUrl}`
    });
    const gitAdd = await inquirer_1.default.prompt({
        name: "add",
        type: "list",
        message: "Git add?",
        choices: ["Yes", "No"]
    });
    const resUrl = keywordFor(url.url, 'y', `/${plural}${extraUrl}`);
    return {
        entity: entity.entity,
        url: resUrl,
        urlWithoutId: `${resUrl.replace("/:id", "")}`,
        gitAdd: gitAdd.add === "Yes",
    };
}
exports.default = default_1;
