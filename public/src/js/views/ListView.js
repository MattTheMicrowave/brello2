var Backbone = require('backbone');
var _ = require('underscore');
var ItemsView = require('./ItemsView');
var ItemModel = require('../models/ItemModel');
var ItemsCollection = require('../Collections/ItemsCollection')

var ListView = Backbone.View.extend({
  el: '<div>\
          <form method="POST" action="/items">\
		          <input id="item-input" type="text" name="name">\
		          <input type="submit" value="Add" id="mysubmitbutton">\
		      </form>\
          <li></li>\
          </div>\
          ',

  template: _.template(
    '<span id="listview"><%= name %> </span>'),

  initialize: function() {
      this.model.fetch();
      this.listenTo(this.model, 'changed', this.render);
  },

  events: {
		'submit form' : 'addItem'
	},

	addItem: function (event) {
		event.preventDefault();
		var _this = this;
		var newItem = new ItemModel;


		newItem.set({ name : $('#item-input').val() });
		newItem.save(null, {
		success: function () {
		    _this.model.get("items").add(newItem);
        this.collection.add(newitem);

		}
	  });

		$('#item-input').val("");

	},

  render: function() {
    this.$('li').html('');
    this.$('li').append(this.template({
      name: this.model.get('name'),
    }));

    var itemsView = new ItemsView({ collection : this.model.get('items') });
    this.$('li').append(itemsView.render().el);
    return this;
  }


});

module.exports = ListView;
