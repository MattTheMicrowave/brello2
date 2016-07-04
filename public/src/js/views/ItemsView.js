var Backbone = require('backbone');
var _ = require('underscore');
var ItemView = require('./ItemView');

var ItemsView = Backbone.View.extend({
  el: '<li id="itemsview"></li>',

  initialize: function() {
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function() {
    var that = this;
    this.$el.html('');
    this.collection.each(function(item){
      var itemView = new ItemView({model: item});
      that.$el.append(itemView.render().el);
      console.log('y');
    });

    return this;
  }

});

module.exports = ItemsView;
