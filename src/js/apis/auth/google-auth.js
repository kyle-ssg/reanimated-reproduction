import '../libs/gapi';

exports.login = function () {
  return new Promise((resolve) => {
    gapi.client.setApiKey(Project.google.APIKey);
    gapi.auth.authorize({
      'client_id': Project.google.clientID,
      scope: 'email profile',
      prompt: 'select_account'
    }, function (r) {
      if (r.access_token) {
        resolve(r.access_token);
      }
    });
  });
};
