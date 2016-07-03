var Backbone = require('backbone');
var ListModel = require('../models/ListModel');
var _ = require('underscore');


var ListsCollection = Backbone.Collection.extend({
  url: '/lists',
  model: ListModel,


});

module.exports = ListsCollection;
