import DS from 'ember-data';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.uncountable('health');

export default DS.Model.extend({
  status: DS.attr('string')
});
