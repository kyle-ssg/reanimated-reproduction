"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const findRootPath_1 = require("./findRootPath");
function default_1() {
    let rootPath = (0, findRootPath_1.findRootPath)();
    (0, child_process_1.execSync)(`cd ${rootPath} && npm run lint:fix`);
}
exports.default = default_1;
