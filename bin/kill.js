var ps = require('ps-node');
// A simple pid lookup
var task = new Promise(function (resolve) {
    ps.lookup({
        command: 'node',
    }, function(err, resultList ) {
        if (err) {
            resolve();
        }

        resultList.forEach(function( process ){});
    });
});

task.then(function(){})