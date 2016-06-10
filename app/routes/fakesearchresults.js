import Ember from 'ember';

export default Ember.Route.extend({
	model() {
	return ['this', 'is','actually','a','static','list'];
  }
});
