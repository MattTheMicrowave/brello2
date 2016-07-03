var Backbone = require('backbone')
var TagModel = require('../models/TagModel')

var TagsCollection = Backbone.Collection.extend({
  urlRoot: '/tags',
  model: TagModel

});

module.exports = TagsCollection;
