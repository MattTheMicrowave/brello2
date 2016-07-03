var Backbone = require('backbone');
var TagsCollection = require('../collections/TagsCollection');

var ItemModel = Backbone.Model.extend({

  urlRoot: '/items',
  idAttribute: '_id',

  
});

module.exports = ItemModel;
