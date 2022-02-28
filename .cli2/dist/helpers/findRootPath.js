"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRootPath = void 0;
const tslib_1 = require("tslib");
const fs_1 = (0, tslib_1.__importDefault)(require("fs"));
const path_1 = (0, tslib_1.__importDefault)(require("path"));
function findRootPath() {
    let rootPath = path_1.default.join(__dirname, '../../../');
    if (!fs_1.default.existsSync(path_1.default.join(rootPath, './common/store.ts'))) {
        rootPath = path_1.default.join(__dirname, '../../');
        if (!fs_1.default.existsSync(path_1.default.join(rootPath, './common/store.ts'))) {
            rootPath = path_1.default.join(__dirname, '../');
            if (!fs_1.default.existsSync(path_1.default.join(rootPath, './common/store.ts'))) {
                rootPath = path_1.default.join(__dirname, './');
                if (!fs_1.default.existsSync(path_1.default.join(rootPath, './common/store.ts'))) {
                    console.log("Could not find common/store.ts, are you in a project?");
                    process.exit(1);
                }
            }
        }
    }
    return rootPath;
}
exports.findRootPath = findRootPath;
