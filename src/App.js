import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// const ClientOAuth2 = require("client-oauth2");
// const JUNK = require('./.env');
//
// const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
// const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

// $url = 'https://fantasysports.yahooapis.com/fantasy/v2/users;use_login=1/games;game_keys=nfl/teams';
// $scope = 'test';

class App extends Component {
  constructor() {
  super();
  this.state = {};
  }

  yahooAuth = () => {
    // console.log(CLIENT_ID);
    var yAuth = new ClientOAuth2({
      clientId: `${CLIENT_ID}`
    });

    console.log(yAuth);

    // var token = yAuth.createToken(function(oauth_access_token) { data: 'data'});
    var token = yAuth.createToken(function('access token'), {}
      if (error) {
        console.log("suppp");
        console.log('error: ' + JSON.stringify(error))
      } else {
        console.log('oauth_token: ' + oauth_token);
        oauth_token.sign({
          url: 'https://fantasysports.yahooapis.com/fantasy/v2/users;use_login=1/games;game_keys=nfl/teams',
          method: 'GET',
          oauth_token
        }).then(function(error, results, response) {
              if (error) {
                console.log("hayy ln 41!!!");
              } else {
                console.log(response);
              }
        })
      }
    })
  }

  

  render() {
    return (
      <div className="App">
        {/*{this.yahooAuth()}*/}
      </div>
    );
  }
}

export default App;
