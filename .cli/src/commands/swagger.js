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
const postController = require('../controller').writePost;

class TheCommand extends Command {
  async run() {
    // const uri = await cli.prompt('Where is the Swagger JSON?');
    const uri = "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.json";
    await new Promise((resolve ,reject)=>{
      request.get(uri, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          const swagger = JSON.parse(body);
          const output = swaggerToTS(swagger); // Outputs TypeScript defs as a string (to be parsed, or written to a file)
          console.log(output)
          const v = parseInt(swagger.swagger||swagger.openapi);
          console.log("Parsing version", v)
          _.each(swagger.paths,(path,pathKey)=>{

            //url
            _.each(path,(method,methodKey)=> {
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
                    console.log("Item", methodKey, cliPath, type)
                  } else { // collection
                    console.log("Collection", methodKey, cliPath, type)
                  }
                } else if (methodKey === 'delete') { // delete
                  console.log("Delete", methodKey, cliPath, type)

                } else if (methodKey === 'put') {
                  console.log("Update", methodKey, cliPath,type)
                } else if (methodKey === 'post') {
                  console.log("Create", methodKey, cliPath, type)
                }
            })
          })
          // console.log(output)
          // Continue with your processing here.
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
