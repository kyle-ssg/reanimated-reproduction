"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collection = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@oclif/core");
const commonQuestions_1 = (0, tslib_1.__importDefault)(require("../helpers/commonQuestions"));
const gitAdd_1 = (0, tslib_1.__importDefault)(require("../helpers/gitAdd"));
const writer_1 = require("../writer");
const lint_1 = (0, tslib_1.__importDefault)(require("../helpers/lint"));
const collection = async () => {
    const actionType = "get";
    const { gitAdd, entity, url, urlWithoutId } = await (0, commonQuestions_1.default)(false, true);
    await (0, writer_1.writeRequestTypes)("get", entity);
    await (0, writer_1.writeRequestTypes)("update", entity);
    await (0, writer_1.writeRequestTypes)("delete", entity);
    await (0, writer_1.writeRequestTypes)("create", entity);
    await (0, writer_1.writeCreateQuery)(entity, urlWithoutId, true);
    await (0, writer_1.writeDeleteQuery)(entity, url, true);
    await (0, writer_1.writeGetQuery)(entity, url, true);
    await (0, writer_1.writeUpdateQuery)(entity, url, true, true);
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
Index.description = "RTK Service: Create,get,update and delete a thing with an api";
