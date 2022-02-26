const fs = require('fs');
const path = require('path');

const rootPath = path.join(__dirname, '../../../');
const common = path.join(rootPath, './common');
const service = path.join(rootPath, './common/services/defaultService.ts');
const requests = path.join(rootPath, './common/services/requests.ts');
const responses = path.join(rootPath, './common/services/responses.ts');

const servicePointer = '// END OF ENDPOINTS';
const typePointer = '// END OF TYPES';
const exportPointer = '// END OF EXPORTS';

const functionName = function (action:string, prefix:string) {
    const post = prefix.charAt(0).toUpperCase() + prefix.slice(1);
    const actionParts = action.split('_');
    return actionParts[0].toLowerCase() + post;
};

module.exports = {
    async writeRequestTypes(name:string) {
        const webPath = path.join(common, `swagger-definitions.ts`);
        const res = fs.existsSync(webPath);
        return fs.writeFileSync(webPath, string, 'utf8');
    },
};
