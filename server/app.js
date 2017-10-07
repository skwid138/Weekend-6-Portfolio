// requires
var express = require('express');
var app = express();

require('dotenv').config();
var port = process.env.PORT || 5000;
var path = require('path');

// set public folder
app.use(express.static('server/public'));

// Using request module to make HTTP requests from the server
// https://www.npmjs.com/package/request
var request = require('request');

// API Key & username are environment variables in Heroku
var username = process.env.USER_NAME;
var oauthToken = process.env.GIT_TOKEN;

// set static folder again?
app.use(express.static('public'));

// github api user options
var user_options = {
  url: 'https://api.github.com/users/' + username,
  headers: {
    'User-Agent': 'request',
    'Authorization': 'token ' + oauthToken
  } // end headers
}; // end user_options

// Moved API call into server to protect oAuthToken
app.get('/github/user', function (req, res) {
  request(user_options, function (error, response, body) {
    if (response && response.statusCode == 200) {
      res.send(body);
    } else {
      res.sendStatus(500);
    } // end else
  }); // end request
}); // end get

// github api repo options
var repo_options = {
  url: 'https://api.github.com/users/' + username + '/repos',
  headers: {
    'User-Agent': 'request',
    'Authorization': 'token ' + oauthToken
  } // end headers
}; // end repo_options

// Moved API call into server to protect oAuthToken
app.get('/github/repos', function (req, res) {
  request(repo_options, function (error, response, body) {
    if (response && response.statusCode == 200) {
      res.send(body);
    } else {
      res.sendStatus(500);
    } // end else
  }); // end request
}); // end get

// listening
app.listen(port, function () {
  console.log('localhost running on port', port);
}); // end listen
