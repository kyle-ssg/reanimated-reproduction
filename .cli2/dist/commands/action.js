"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collection = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@oclif/core");
const gitAdd_1 = (0, tslib_1.__importDefault)(require("../helpers/gitAdd"));
const writer_1 = require("../writer");
const lint_1 = (0, tslib_1.__importDefault)(require("../helpers/lint"));
const actionQuestions_1 = (0, tslib_1.__importDefault)(require("../helpers/actionQuestions"));
const collection = async () => {
    const actionType = "get";
    const { prefix, entity, gitAdd } = await (0, actionQuestions_1.default)();
    await (0, writer_1.writeRequestTypes)(actionType, entity, true);
    if (gitAdd) {
        (0, gitAdd_1.default)();
    }
};
exports.collection = collection;
class Index extends core_1.Command {
    async run() {
        await (0, exports.collection)();
        (0, lint_1.default)();
    }
}
exports.default = Index;
Index.description = "Reducer Slice: Dispatch an action that stores global state";
