window.$ = window.jQuery = require('jquery');
var ItemsView = require('./views/ItemsView');
var ItemsCollection = require('./collection/ItemsCollection');

var itemsCollection = new ItemsCollection();
var itemsView = new ItemsView({ collection : itemsCollection });

itemsCollection.fetch();

$('#app').html();
