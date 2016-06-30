window.$ = window.jQuery = require('jquery');
var ListsView = require('./views/ListsView');
var ListsCollection = require('./collections/ListsCollection');

var listsCollection = new ListsCollection();
var listsView = new ListsView({ collection : listsCollection });

listsCollection.fetch();

$('#app').html(listsView.render().el);
