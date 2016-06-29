var Backbone = require('backbone');
var _ = require('underscore');
var ItemView = require('./ItemView');

var ItemsView = Backbone.View.extend({
  el: '<ul></ul>',

  template: _.template([
    '<li>',
    '<span><%= item.label </span>',
    '<span><%= tags %></span>',
    '</li>'
  ].join(''))

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    var _this = this;
    this.collection.each(function(item){
      var itemView = new ItemView({model: item});
      _this.$el.append(itemView.render().el);
      console.log('y');
    });

    return this;
  }

});

module.exports = ItemsView;
