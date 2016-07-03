var Backbone = require('backbone')
var ItemsCollection = require('../collections/ItemsCollection');
var TagsCollection = require('../collections/TagsCollection');

var ListModel = Backbone.Model.extend({
  urlRoot: '/lists',
  idAttribute: '_id',

parse: function(list) {
  var items = list.items || [];
  list.items = new ItemsCollection(items);

  list.items.each(function(item) {
  tags = item.get("tags") || [];
  item.set('tags', new TagsCollection(tags));
  });

  return list;

  }
});

module.exports = ListModel;
