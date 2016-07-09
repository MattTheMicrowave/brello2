var Backbone = require('backbone');
var _ = require('underscore');
var TagView = require('./TagView');

var AllTagsView = Backbone.View.extend({
  el: '<ul id="alltagsview"></ul>',

  initialize: function() {
    this.listenTo(this.collection, 'update', this.render);
  },


  render: function() {
        this.$el.html('');
        var _this = this;
        this.collection.each(function(tag){
              var tagView = new TagView({model: tag});
              _this.$el.append(tagView.render().el);
              console.log('y');
        });
        return this;
  }
});

module.exports = AllTagsView;
