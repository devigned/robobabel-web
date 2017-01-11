import Ember from 'ember';
import OAuth2Bearer from 'ember-simple-auth/authorizers/oauth2-bearer';

const { isEmpty } = Ember;

export default OAuth2Bearer.extend({
  session: Ember.inject.service('session'),
  /*
   @method authorize
   @param {Object} data The data that the session currently holds
   @param {Function} block(headerName,headerContent) The callback to call with the authorization data; will receive the header name and header content as arguments
   @public
  */
  authorize(data, block) {
    let accessToken = null;

    if(data.authorizationToken){
      accessToken = data.authorizationToken['access_token'];
      if(accessToken) {
        this.get('session').set('data.access_token', accessToken);
      }
    } else {
      accessToken = this.get('session').get('data.access_token');
    }

    if(!accessToken) {
      this.get('session').invalidate();
    }

    if (!isEmpty(accessToken)) {
      block('Authorization', `Bearer ${accessToken}`);
    }
  }
});
