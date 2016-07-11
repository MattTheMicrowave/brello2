var Backbone = require('backbone');
var _ = require('underscore');
var TagsView = require('./TagsView');


var ItemView = Backbone.View.extend({
  el: '<li id="itemview"></li>',

  template: _.template('\
      <%= model.get("name") %><span></span>\
  '),

  initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },


  render: function() {
    this.$el.html(this.template({ model : this.model }));
    // var tagsView = new TagsView({ collection: this.model.get('tags') });
    // 
    // this.$el.find('span').html(tagsView.render().el);

    return this;
  }


});

module.exports = ItemView;
