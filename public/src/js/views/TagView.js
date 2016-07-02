var _ = require('underscore');
var Backbone = require('backbone');

var TagView = Backbone.View.extend({
  el: '<span></span>',

  template: _.template('\
  <small><%= model.get("label") %></small>\
  '),

  render: function() {
      this.$el.html(this.template( {model: this.model }));
      return this;
    }
});
