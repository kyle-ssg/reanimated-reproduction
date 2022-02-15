require('dotenv').config();
const Slack = require('nodejslack');
// @ts-ignore
const fs = require('fs');
// @ts-ignore
const name = require('../../package.json').name
const SLACK_TOKEN = process.env.SLACK_TOKEN;
const slack = SLACK_TOKEN ? new Slack(process.env.SLACK_TOKEN) : null;

module.exports = function (path) {
    if (!SLACK_TOKEN) {
        console.log('SLACK_TOKEN not specified in env variables, skipping upload');
        return;
    }
    console.log(SLACK_TOKEN)
    const parts = path.split('/');
    const form = {
        file: fs.createReadStream(path), // Optional, via multipart/form-data. If omitting this parameter, you MUST submit content
        // content: 'Your text here', // Optional, File contents. If omitting this parameter, you must provide a `file`
        filename: parts[parts.length - 1], // Required
        fileType: 'auto', // Optional, See more file types in https://api.slack.com/types/file#file_types
        title: 'Test Run ' + name, // Optional
        channels: process.env.SLACK_CHANNEL || "boilerplate-tests", // Optional, If you want to put more than one channel, separate using comma, example: 'general,random'
    };

    console.log(`Uploading ${path} to channel ${name}-tests, this is based on package.json`);
    return slack.fileUpload(form)
        .then((response) => {
          console.log(response)
            // Slack sends a json with a boolean var ok.
            // Error example : data = { ok: false, error: 'user_not_found'         }
            // Error example : data = { ok: true, file: 'user_not_found' }
            if (!response || !response.ok) {
                return Promise.reject(new Error('Something wrong happened during the upload.'));
            }
            console.log('Uploaded Successfully:', response);

            return Promise.resolve(response);
        })
        .catch(err => {
          console.log("Error uploading " + JSON.stringify(err))
          return err
        });
};
