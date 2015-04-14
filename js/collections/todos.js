var app = app || {};

var TodoList = Backbone.Collection.extend({
  model: app.Todo,

  // Overrides Backbone sync() to save under a namespace
  localStorage: new Backbone.LocalStorage('todos-backbone'),

  completed: function(){
    return this.filter(function( todo ){
      return todo.get('completed');
    });
  },

  // filter list
  remaining: function() {
    return this.without.apply( this, this.completed() );
  }, 

  nextOrder: function(){
    if ( !this.length ) {
      return 1;
    }
    return this.last().get('order') + 1;
  },

  comparator: function( todo ) {
    return todo.get('order');
  }
});

app.Todos = new TodoList();