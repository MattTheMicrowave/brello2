var Backbone = require('backbone');
var _ = require('underscore');
var TagsView = require('./TagsView');


var ItemView = Backbone.View.extend({
  el: '<li id="itemview"></li>',

  template: _.template('\
      <form>\
      <input class="editItem" type="text" value= <%= model.get("name") %> >\
      <input type="submit" value="Save"> </form> &nbsp;&nbsp;<span class="delete">DELETE</span>\
  '),

  events: {
		'click .delete' : 'removeItem',
    'submit form' : 'saveItem'
	},

  saveItem: function() {
    event.preventDefault();
    this.model.set("name", this.$('.editItem').val());
    this.model.save();
  },

  removeItem: function() {
    this.model.destroy();
  },

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
