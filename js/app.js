App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return [['Load Balancer'],['Server 1', 'Server 2']];
  }
});
