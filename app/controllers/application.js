import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },
    authenticate() {
      this.get('session').authenticate('authenticator:torii').catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
