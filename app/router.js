import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('stimsets');
  this.route('cbmovies');
  this.route('cbaudio');
  this.route('eventsmp');
  this.route('linkpage');
  this.route('viewstim');
  this.route('fakesearchresults');
  this.route('fakesearch');
  this.route('about');
});

export default Router;
