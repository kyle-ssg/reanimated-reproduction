"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function default_1() {
    (0, child_process_1.execSync)('cd ../ && npm run lint:fix');
}
exports.default = default_1;
