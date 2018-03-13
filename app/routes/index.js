import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model () {
    return RSVP.hash({
      plan: this.get('store')
        .queryRecord('plan', {})
        .then(function (plan) {
          console.log('queryRecord plan days', plan.get('days'), plan.id);

          return plan;
        }),
      things: this.get('store').findAll('thing'),
    });
  }
});
