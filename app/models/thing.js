import DS from 'ember-data';

export default DS.Model.extend({
  widget: DS.attr('string', { defaultValue: 'widget' }),
});
