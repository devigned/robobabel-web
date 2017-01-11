/**
 * This class implements authentication against google
 * using the client-side OAuth2 authorization flow in a popup window.
 */

import Oauth2Bearer from 'torii/providers/oauth2-bearer';
import {configurable} from 'torii/configuration';

let RoboOauth2Bearer = Oauth2Bearer.extend({
  name: 'robo-oauth2-bearer',
  baseUrl: configurable('baseUrl', 'http://localhost:8081/auth/github?auth_origin_url=' + configurable('auth_origin_url', 'http://localhost:8081/oauth2callback')),
  responseParams: ['access_token'],
  redirectUri: configurable('redirectUri', 'http://localhost:3000/auth/github/callback'),
});

export default RoboOauth2Bearer;
