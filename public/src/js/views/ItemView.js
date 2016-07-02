var Backbone = require('backbone');
var _ = require('underscore');
var TagsView = require('./TagsView');


var ItemView = Backbone.View.extend({
  el: '<li></li>',

  template: _.template('\
      <%= model.get("name") %>\
  '),

  initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },

    // render: function() {
    //     var tagsView = new TagsView({ collection: this.model.get('tags') });
    //     this.$el.html(this.template( {model: this.model }));
    //     this.$el.find('span').html(tagsView.render().el);
    //     return this;
    // }
  render: function() {
    this.$el.append(this.template({ model : this.model }));
    return this;
  }


});

module.exports = ItemView;
