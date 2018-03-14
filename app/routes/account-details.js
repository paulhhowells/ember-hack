import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  auth: service(),
  beforeModel() {
    const auth = this.get('auth');
    const isSignedIn = auth.getIsSignedIn();

    if (isSignedIn === false) {
      // Implicitly aborts the on-going transition.
      this.transitionTo('index');
    }
  },
  model() {
    return this.get('store')
      .queryRecord('plan', {})
      .then(function (plan) {
        return plan;
      });
  }
});
