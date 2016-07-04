var Backbone = require('backbone');
var TagView = require('./TagView');
var _ = require('underscore');


var TagsView = Backbone.View.extend({
  el: '<span class="tagsview"></span>',

  initialize: function() {
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function() {
    var that = this;
    this.$el.html('');
    this.collection.each(function(tag) {
      var tagView = new TagView({ model: tag });
      that.$el.append(tagView.render().el);
    });
    return this;
  }
});

module.exports = TagsView;
