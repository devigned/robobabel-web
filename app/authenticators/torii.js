import Ember from 'ember';
import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';

export default ToriiAuthenticator.extend({
  session: Ember.inject.service('session'),
  torii: Ember.inject.service(),
  invalidate(data) {
    this.get('session').set('access_token', null);
    return this.get('torii').close(this._provider, data).then(() => {
      delete this._provider;
    });
  }
});
