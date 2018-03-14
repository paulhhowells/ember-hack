import Service from '@ember/service';

export default Service.extend({
  isSignedIn: true,
  init() {
    this._super(...arguments);
  },
  getIsSignedIn() {
    return this.get('isSignedIn');
  },
  signIn() {
    this.set('isSignedIn', true);
  },
  signOut() {
    this.set('isSignedIn', false);
  }
});
