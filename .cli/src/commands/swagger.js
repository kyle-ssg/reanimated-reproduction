const { Command, flags } = require('@oclif/command');
const cli = require('cli-ux').default;
const getPrefix = require('../helpers/getPrefix');
const controller = require('../controller').writeUpdate;
const swaggerToTS = require("@manifoldco/swagger-to-ts").default;
const request = require("request");
const _ = require('lodash')
const { exec } = require('child_process');
const reg = /\{(.*?)\}/g
const collectionController = require('../controller').writeCollection;
const getController = require('../controller').writeGet;
const updateController = require('../controller').writeUpdate;
const writeTypes = require('../helpers/writer').writeTypes;

class TheCommand extends Command {
  async run() {


    const parseBody = async (swagger, v) => {

      for (const pathKey of Object.keys(swagger.paths)) {
        const prefix = (await cli.prompt('Define the entity for ' + pathKey, { default: 'THING' })).toLowerCase()

        for (const methodKey of Object.keys(swagger.paths[pathKey])) {
          const method = swagger.paths[pathKey][methodKey]
          let type = "any";
          if (v === 3) {
            const parsedResponse = v === 3 ? _.get(method, "responses.200.content.application/json.schema.$ref") : _.get(method, "responses.200.schema")
            if (parsedResponse) {
              const [index,index2,...rest] = parsedResponse.replace("#","").split("/");
              type = index2 + rest.map((index)=>"['"+index+"']").join("")
            }
          }
          const cliPath = pathKey.replace(reg,":$1")
          if (methodKey === 'get') {
            if (cliPath.includes(":")) { // get
              await getController(`GET_${prefix.toUpperCase()}`, prefix, cliPath, true, true, type);
            } else { // collection
              await collectionController(`GET_${prefix.toUpperCase()}`, prefix, cliPath, true, true, type);
            }
          } else if (methodKey === 'delete') { // delete
          } else if (methodKey === 'put') {
            await updateController(`UPDATE_${prefix.toUpperCase()}`, prefix, cliPath, true, true, type);
          } else if (methodKey === 'post') {
            await updateController(`CREATE_${prefix.toUpperCase()}`, prefix, cliPath, true, true, type);
          }
        }

      }

      // _.each(swagger.paths, async ()=>{
      //   const prefix = await cli.prompt('Define the entity for GS', { default: 'THING' })
      //   swagger.paths.fo
      // })
      // _.each(swagger.paths, async (path,pathKey)=>{
      //   const prefix = await cli.prompt('Define the entity for ' + pathKey + ', e.g. THING or THINGS', { default: 'THING' })
      //   _.each(path,async (method,methodKey)=> {
      //     let type = "any";
      //     if (v === 3) {
      //       const parsedResponse = v === 3 ? _.get(method, "responses.200.content.application/json.schema.$ref") : _.get(method, "responses.200.schema")
      //       if (parsedResponse) {
      //         const [index,index2,...rest] = parsedResponse.replace("#","").split("/");
      //         type = index2 + rest.map((index)=>"['"+index+"']").join("")
      //       }
      //     }
      //     const cliPath = pathKey.replace(reg,":$1")
      //
      //     if (methodKey === 'get') {
      //       if (cliPath.includes(":")) { // get
      //         await getController(`GET_${prefix.toUpperCase()}`, prefix, cliPath, true, true, type);
      //       } else { // collection
      //         await collectionController(`GET_${prefix.toUpperCase()}`, prefix, cliPath, true, true, type);
      //       }
      //     } else if (methodKey === 'delete') { // delete
      //     } else if (methodKey === 'put') {
      //       await updateController(`UPDATE_${prefix.toUpperCase()}`, prefix, cliPath, true, true, type);
      //     } else if (methodKey === 'post') {
      //       await updateController(`CREATE_${prefix.toUpperCase()}`, prefix, cliPath, true, true, type);
      //     }
      //   })
      // })
    }

    // const uri = await cli.prompt('Where is the Swagger JSON?');
    const uri = "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.json";
      await new Promise(async (resolve ,reject)=>{
          request.get(uri, function (error, response, body) {
            if (!error && response.statusCode == 200) {
              const swagger = JSON.parse(body);
              const output = swaggerToTS(swagger); // Outputs TypeScript defs as a string (to be parsed, or written to a file)
              writeTypes(output)
              const v = parseInt(swagger.swagger||swagger.openapi);
              parseBody(swagger, v)
            }
          });
      })
  }
}
TheCommand.args = [
  { name: 'prefix' },
];
TheCommand.flags = {
  name: flags.string({ char: 'n', description: 'name to print' }),
};

module.exports = TheCommand;