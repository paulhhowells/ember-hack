import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model () {
    return RSVP.hash({
      plan: this.get('store')
        .queryRecord('plan', {})
        .then(function (plan) {

          console.log('id', plan.id);
          console.log('days', plan.get('days'));

          return plan;
        }),
      things: this.get('store').findAll('thing'),
    });
  }
});
