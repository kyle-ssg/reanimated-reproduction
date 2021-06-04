const fetch = require('isomorphic-unfetch')
const Project = require('../../../common/project')
module.exports = class CustomCommand {
    async command(data,url,namespace) {
        await fetch(`http://localhost:5000?mock=1&url=${url}&baseUrl=${Project.api}&namespace=${namespace||"default"}`,{
            method:"post",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        })
    }
}
