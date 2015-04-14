var Workspace = Backbone.Router.extend({
  routes: {
    // splat to set up a default route which passes the string after ‘#/’ 
    // in the URL to setFilter() which sets app.TodoFilter to that string
    '*filter': 'setFilter'
  },

  setFilter: function(param) {
    if (param) {
      param = param.trim();
    }
    app.TodoFilter = param || '';

    app.Todos.trigger('filter');
  }
});

app.TodoRouter = new Workspace();
Backbone.history.start();