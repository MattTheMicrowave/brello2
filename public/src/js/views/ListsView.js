var Backbone = require('backbone');
var _ = require('underscore');
var ListView = require('./ListView');
var ListModel = require('../models/ListModel');

var ListsView = Backbone.View.extend({
  el: '<div>\
  <form class="addLists">\
      <input class="newlist" type="text" name="name">\
      <input type="submit" value="Add List" class="mysubmitbutton">\
  </form>\
  <ul class="listsview"></ul>\
  </div>',

  initialize: function() {
    this.listenTo(this.collection, 'update', this.render);

  },

  events: {
    'submit .addLists' : 'addListsFunction'
  },

  addListsFunction: function(event) {
    	event.preventDefault();
  		var _this = this;
  		var newList = new ListModel;

  		newList.set({ name : this.$('.newlist').val() });
  		newList.save(null, {
    		success: function () {
    		    _this.collection.add(newList);
    		}
  	  });

  		this.$('.newlist').val("");

  },

  render: function() {
        this.$('.listsview').html('');
        var _this = this;
        this.collection.each(function(list){
              var listView = new ListView({model: list});
              _this.$('.listsview').append(listView.render().el);
              console.log('y');
        });
        return this;
  }
});

module.exports = ListsView;
