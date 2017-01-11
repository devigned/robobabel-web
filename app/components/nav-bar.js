import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    authenticate() {
      this.get('session').authenticate('authenticator:torii', 'robo-oauth2-bearer').catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
