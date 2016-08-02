/**
 * Created by kylejohnson on 02/08/2016.
 */
require('colors');
const fs =  require('fs-extra');
const path =  require('path');
const args = process.argv.slice(2);


const src = path.resolve(__dirname, `../env/project_${args[0]}.js`);
const target = path.resolve(__dirname, `../src/js/common/project.js`);


console.log(`${src}`.green  + '>' + `${target}`.blue)
fs.copySync(src, target);
