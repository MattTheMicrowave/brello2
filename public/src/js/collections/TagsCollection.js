var Backbone = require('backbone')
var TagModel = require('../models/TagModel')

var TagsCollection = Backbone.Model.extend({
  urlRoot: '/tags',
  idAttribute: '_id'

});

module.exports = TagsCollection;
