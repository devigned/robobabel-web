import DS from 'ember-data';

export default DS.Model.extend({
  status: DS.attr('string'),
  name: DS.attr('string'),
  updated_at: DS.attr('date')
});
