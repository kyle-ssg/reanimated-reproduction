/**
 * Created by kylejohnson on 02/08/2016.
 */
const fs = require('fs-extra');
const path = require('path');

const env = process.env.ENV || 'dev';
const src = path.resolve(__dirname, `../../env/project_${env}.js`);
const target = path.resolve(__dirname, '../../common/project.js');

// eslint-disable-next-line no-console
console.log(`Using project_${env}.js`);

fs.copySync(src, target);
