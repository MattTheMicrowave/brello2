var Backbone = require('backbone')

var ListModel = Backbone.Model.extend({
  urlRoot: '/lists',
  idAttribute: '_id'

});

module.exports = ListModel;
