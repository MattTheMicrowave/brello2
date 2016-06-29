var Backbone = require('backbone');

var ItemModel = Backbone.Model.extend({
  urlRoot: '/items',
  idAttribute: '_id',
});

module.exports = ItemModel;
