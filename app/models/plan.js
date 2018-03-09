import DS from 'ember-data';

export default DS.Model.extend({
  days: DS.attr('number', { defaultValue: 53 }),
  ready: DS.attr('boolean', { defaultValue: false }),
});
